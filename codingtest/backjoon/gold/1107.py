# 리모컨 현재보는 채널 100번
from itertools import product
# n(찾으려는 채널), m(고장난 버튼의 수)
n = int(input())
m = int(input())
answer = abs(n - 100) # 초기값
lenRange = len(str(n))  # 자릿수
# 최대가 6자리라서 범위처리 오류 방지
if lenRange == 6:
    lenRange = 5
# 예외 처리
if m != 0:
    errorButton = list(map(int,input().split()))
else:
    errorButton=[]
# 에러버튼 제외
remocon = [i for i in range(10) if i not in errorButton]
# 중복순열을 통해 경우의수 구하기
for i in range(lenRange + 1, 0, -1):
    comLi = list(product(remocon, repeat = i))  # 중복순열
# 중복순열 리스트 탐색
    for com in comLi:
        num = ''.join(map(str,com)) # 중복순열을 문자열로 변환
        num = int(num)  # 숫자로 변환
        Numlen = len(str(num))  # 현재 숫자의 길이
        answer = min(answer, abs(n - num) + Numlen) # 최소값 구하기
        
print(answer)
