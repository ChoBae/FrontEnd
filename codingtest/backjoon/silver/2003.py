# 수들의합2 실버3 투포인터
n, m = map(int, input().split())
numLi = list(map(int, input().split()))

start , end, emp, answer = 0, 0, 0, 0

while True:

    if emp >= m:
        if emp == m:
            answer += 1
        emp -= numLi[start]
        start += 1 
    
    elif end == n:
        break
        
    else:
        emp += numLi[end]
        end += 1
    

        
print(answer)