class Solution:
    def findContentChildren(self, g: list[int], s: list[int]) -> int:
        g.sort()
        s.sort()   #g=[1,2], s = [1,2,3]
        i = 0  # 2
        j = 0  # 2
        count = 0  # [2]

        while i <len(g) and j <len(s):
            if s[j] >= g[i]: # 2 >= 2 
                count += 1
                j += 1
                i += 1
            else: j += 1   
        return count     


        

