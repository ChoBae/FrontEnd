# 음계
numLi = list(map(int, input().split()))

if numLi == sorted(numLi):
    print('ascending')
elif numLi == sorted(numLi,reverse= True):
    print('descending')
else:
    print('mixed')