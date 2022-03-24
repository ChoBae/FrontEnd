# 수 고르기 골드5 투포인터
import sys
input = lambda :sys.stdin.readline().rstrip()
n, m = map(int, input().split())    # n(수의 개수), m(타겟 값)
numLi = [int(input()) for i in range(n)]    # 숫자 리스트
numLi.sort() # **숫자 정렬
start, end, answer = 0, 0, 10e9 # 초기값 설정

while start < n and end < n: # start와 end 끝까지 검사
    # end위치와 start위치의 값이 m의 값 이상일때 (타겟)
    if numLi[end] - numLi[start] >= m:
        # 갱신해주기 
        answer = min(answer, numLi[end] - numLi[start])
        start += 1
    # 타겟값을 못구했을때 end 위치 옮겨줌
    else:
        end += 1
print(answer)