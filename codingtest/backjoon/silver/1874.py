# 스택수열
# 입력값
n = int(input())    # n(수의 개수)
numLi = [int(input()) for _ in range(n)]    # n개의 수
stack = []  # 스택 공간
answers = []    # 답안
i = 0   # 시작점

# 스택 연산 과정
for num in numLi:   # 수만큼 탐색
    while i <= n:   # i가 n까지 커지면 break
        # stack의 길이가 0보다 크고 pop의 위치의 값이 현재의 수와 같으면 스택 pop() '-'
        if len(stack) > 0 and stack[-1] == num: 
            answers.append('-')
            stack.pop()
            break 
        # 스택 push() '+'
        i += 1 
        stack.append(i)
        answers.append('+')
        
# 예외처리1) 스택이 남았다면 불가능한 구조
if len(stack) > 0:
    print('NO')
    
# 출력
# 스택이 남지않았다면
else:
    for answer in answers:
        print(answer)