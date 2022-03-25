# 로또
# from itertools import combinations
# result = []
# while True:
#     tmp = list(map(int,input().split()))
    
#     if tmp[0] == 0:
#         break
    
#     else:
#         comTmp = list(combinations(tmp[1:],6))
#         result.append(comTmp)

# for i in range(len(result)):
#     if i != 0:
#         print()
#     for j in range(len(result[i])):
#         for k in result[i][j]:
#             print(k, end = ' ')
#         print()
import sys
input = sys.stdin.readline()
def dfs(start, depth):
    if depth == 6:
        print(*numLi)
        return
    for i in range(start,rangeNum):
        numLi.append(tmp[i])
        dfs(i+1, depth+1)
        numLi.pop()

while True:
    tmp = list(map(int,input().split()))
    rangeNum = tmp[0]
    if rangeNum == 0:
        break
    
    else:
        tmp = tmp[1:]
        numLi = []
        dfs(0,0)
        print()
