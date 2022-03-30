# 팰린드롬수
answers = []

while True:
    tmp = input()
    check = False
    if tmp == '0':
        break
    # 짝수 일때
    if len(tmp) % 2 ==0:
        mid = int(len(tmp) / 2) -1
        firstPart = tmp[:mid+1]
        secondPart = tmp[mid+1:]
        if firstPart == secondPart[::-1]:
            check = True
    else:
        mid = int(len(tmp) / 2)
        firstPart = tmp[:mid]
        secondPart = tmp[mid+1:]
        if firstPart == secondPart[::-1]:
            check = True
    
    if check:
        answers.append("yes")
    else:
        answers.append("no")
    # 홀수 일때

for answer in answers:   
    print(answer)   