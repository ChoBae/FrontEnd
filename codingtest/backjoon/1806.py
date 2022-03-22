# 부분합 '골드4' 

n,s = map(int, input().split())
numLi = list(map(int, input().split()))
# 투포인터 설정
start, end, result = 0, 0, 0 
answer = 100001
# 범위가 끝날때까지
while True:
    # 현재까지의 저장값이 타겟값이상이면 
    if result >=s:
        # 배열의 개수의 최소값 구하고, 위치 및 저장값 재설정
        answer = min(answer, end-start)
        result -= numLi[start]
        start += 1
    # 범위를 다 구했을때 break
    elif end == n:
        break
    # 타겟값을 못구했을때 저장값에 계속 더해주기.
    else:
        result += numLi[end]
        end += 1
# 값을 구하지 못했을때
if answer == 100001:
    answer = 0            
print(answer)

