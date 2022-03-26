# 큰수 만들기
def solution(number, k):
    answer = ''
    result = []
    for num in number:
        if int(k) == 0:
            result.append(int(num))
        else:
            if len(result) == 0:
                result.append(int(num))
            else:
                
                if result[-1]< int(num):
                    for nums in reversed(result):
                        if nums< int(num):
                            k = int(k) -1
                            result.pop()
                        result.append(int(num))
                else:
                    result.append(int(num))
    for i in result:
        answer += str(i)
    print(answer)
solution('4177252841', '4')


# a = [1,2,3,4]
# print(a[:-1])