# k진수에서 소수 개수 구하기
# 소수 판별 함수
def sosu(num):
    m = int(num **0.5)
    for i in range(2, m+1):
        if num % i == 0:
            return False
    return True
        
# 솔루션 함수
def solution(n, k):
    answer = 0  # 답안
    tmpString = ''  # n진법 변화시 빈 문자열
    # 10진수 일때 따로 변환이 필요없지만 답을 구하기 위해 문자열처리
    if k == 10:
        tmp = str(n)
    # n진법 변화시
    else:
        while n > 0:
            n, mod = divmod(n, k)
            tmpString += str(mod)
        # 역순이라서 뒤집어줘야함
        tmp = tmpString[::-1]
    # 문제조건을 볼때 0를 기준으로 나눠주면 답이 구해짐.
    for i in tmp.split("0"):
        # 110011의 경우 빈 문자열이 오기 때문에 예외처리
        if i == '':
            continue
        # 소수일 경우 카운트
        if sosu(int(i)) and int(i) !=1:
            answer +=1  
    return answer
# 테스트 케이스
textCase = [(437674, 3) , (110011, 10)]
for n, k in textCase:
    solution(n,k)