class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort()# [[8,10],[15,18]]

        merged = [] # [[1,6], [8,10] , [15,18]]

        for interval in intervals: # [15,18]

            if not merged: # []
                merged.append(interval) #[[1,3]]

            elif interval[0] <= merged[-1][1]: #  15 <= 10
                merged[-1][1] = max(merged[-1][1], interval[1]) # 6

            else:
                merged.append(interval)

        return merged