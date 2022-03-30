# 랜선 자르기 이분탐색 공부하자
k, n = map(int, input().split())    # k(현재 랜선의 개수), n(필요한 랜선의 개수)
answer = 0
lanLi = [int(input()) for _ in range(k)]
lanLi.sort()
start, end = 0, 0

while start != 0: 
    if answer == n:
        break
    
    elif n >= lanLi[start]:
        n -= lanLi[start]
        start += 1
        end += 1
    else:
        start += 1
        end += 1
        n -= lanLi[start]   
print(tmp)