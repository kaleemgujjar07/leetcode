class Solution:
    def isMonotonic(self, nums: List[int]) -> bool:
        increasing = False
        decreasing = False
        l = len(nums)
        for i in range(1, l):
            if nums[i] > nums[i-1]:
                increasing = True
                if increasing == decreasing:
                    return False
            elif nums[i] < nums [i-1]:
                decreasing = True
                if increasing == decreasing:
                    return False
        return True                  
