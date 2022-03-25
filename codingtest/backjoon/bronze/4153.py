answer = []
while True:
    ex = list(map(int, input().split()))
    ex.sort()
    a, b, c = ex[0], ex[1] ,ex[2]
    if a == 0 or b == 0 or c ==0:
        break
        
    if (a*a)+(b*b) == (c*c):
        answer.append('right')
    else:
        answer.append('wrong')

for answers in answer:
    print(answers)