# 단어정렬
n = int(input())
wordLi = [] # 단어 리스트
# n번 반복
for _ in range(n):
    word = input()
    # 중복제거
    if word in wordLi:
        continue
    wordLi.append(word)
# 람다식으로 정렬하되 조건을 처음은 문자의 길이순으로 하고 두번째는 문자열의 사전순으로 정렬
wordLi = sorted(wordLi, key=lambda x: (len(x),x))
# 출력
for word in wordLi:
    print(word)