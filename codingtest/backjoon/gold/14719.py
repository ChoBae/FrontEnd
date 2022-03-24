# 빗물
# import sys
# input = sys.stdin.readline
# w, h = map(int, input().split())
# wList = list(map(int, input().split()))
# start = wList[0]
# tmp = []
# answer = 0
# for i in range(1, len(wList)):
#     if start >= wList[i]:
#         tmp.append(wList[i])
#     # 물이 고였을 때
#     if (wList[i]>= start or i == len(wList)-1) and len(tmp) >1:
#         z = min(wList[i] , start)
#         for tmps in tmp:
#             answer += z-tmps
#         tmp = []
#         start = wList[i]

# if len(tmp) != 0:
#     print(0)
# else:
#     print(answer)
    
import sys
input = sys.stdin.readline
# h(길이) ,w(높이)
h, w = map(int,input().split())
# 높이 값 리스트
wList = list(map(int,input().split()))
answer = 0  # 정답
# 시작위치와 끝위치의 전까지만 체크하면 됨.
for i in range(1, w-1):
    # 현재의 위치에서 좌우 위치 중 가장 큰 값을 찾는다.
    left = max(wList[:i])
    right = max(wList[i+1:])
    # 좌우의 값중에 작은 것으로 빼준다.
    setNum = min(left, right)
    if setNum > wList[i]:
        answer += setNum - wList[i]
 
print(answer)
    
    


