# def prime_list(n):
#     # 에라토스테네스의 체 초기화: n개 요소에 True 설정(소수로 간주)
#     sieve = [True] * n

#     # n의 최대 약수가 sqrt(n) 이하이므로 i=sqrt(n)까지 검사
#     m = int(n ** 0.5)
#     for i in range(2, m + 1):
#         if sieve[i] == True:           # i가 소수인 경우
#             for j in range(i+i, n, i): # i이후 i의 배수들을 False 판정
#                 sieve[j] = False

#     # 소수 목록 산출
#     return [i for i in range(2, n) if sieve[i] == True]
    
# def twoPoniter(numLi):
#     start , end, emp, answer = 0, 0, 0, 0
    
#     while True:
#         # 타겟을 구했거나 커졌을때
#         if emp >= n:
#             if emp == n:
#                 answer += 1
#             emp -= numLi[start]
#             start += 1
            
#         elif end == len(numLi):
#             break
#         # 타겟을 못구했을때
#         else:
#             emp += numLi[end]
#             end += 1
            
#     return answer

# # 소수의 연속합
# n = int(input())
# numLi = []
# print(twoPoniter(prime_list(n+1)))

# 에라토스테네스의 체
n = int(input())    # 1~n 소수 구하기
check = [True] * n # 초기 n까지의 모든 수 소수값(True)으로 설정
# n의 최대 약수가 sqrt(n) 이하이므로 i=sqrt(n)까지 검사
m = int(n ** 0.5)
# 2부터 m 까지 적용하기
for i in range(2, m + 1):
    if check[i]:    # 소수 일때 배수일때의 경우를 모두 소수에서 제외해줌
        for j in range(i+i, n, i):
            check[j] = False

numLi = [i for i in range(2, n) if check[i]]
print(numLi)