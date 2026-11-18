class Solution:
    def findContentChildren(self, g: list[int], s: list[int]) -> int:
        g.sort()
        s.sort()   #g=[1,2,4,5], s = [1,2,3,5,6]
        i = 0  # 5
        j = 0  # 6
        count = 0  # [1 + 1 + 1 + 1 ] = 4

        while i <len(g) and j <len(s):
            if s[j] >= g[i]: # 6 >= 5 
                count += 1
                j += 1
                i += 1
            else: j += 1   
        return count     


        

