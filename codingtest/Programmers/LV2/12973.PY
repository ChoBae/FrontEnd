# 짝지어 제거하기
def solution(s):
    res = []    # 저장값 리스트
    # 인풋값 만큼 반복
    for i in range(len(s)):
        # 인풋값을 하나씩 넣어준다.
        res.append(s[i])
        # 저장된 값의 길이가 2가 넘었을때 검사
        if len(res) >= 2:
            # 같은 수가 연속되서 나왔다면 제거
            if res[-1] == res[-2]:
                res.pop()
                res.pop()
    # 결과 값 리턴     
    if len(res) != 0:
        return 0
    else:
        return 1

solution('cdcd')