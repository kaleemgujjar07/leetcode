class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort()

        merged = []

        for interval in intervals:

            if not merged:
                merged.append(interval)

            elif interval[0] <= merged[-1][1]:
                merged[-1][1] = max(merged[-1][1], interval[1])

            else:
                merged.append(interval)

        return merged