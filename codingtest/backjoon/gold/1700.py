# 멀티탭 스케줄링

# n(멀티탭의 구멍 수), k(용품 총 사용 횟수)
n, k = map(int, input().split())
macLi = list(map(int, input().split())) # 기기 리스트
multitap = []   # 멀티탭 리스트
answer, idx = 0, -1  # 답안, 인덱스 변수

# 기기 사용 횟수만큼 반복
for i in range(k):
    # 이번 기기가 멀티탭에 꽂혀 있으면 무시하기
    if macLi[i] in multitap:
        continue
    # 멀티탭에 남은 자리가 있을때 현재 기기 꽂기
    elif len(multitap) < n:
        multitap.append(macLi[i])
    # 멀티탭에 자리가 없고, 다른 기기 일때    
    else:
        # 멀티탭을 확인
        for machine in multitap:
            # 멀티탭의 기기가 나중에 사용하지 않을때 빼준다
            if machine not in macLi[i:]:
                changeMac = machine
                break
            # 멀티탭의 기기들이 이 후에 사용된다면 가장 뒤에 사용하는 것을 뺀다. 
            elif macLi[i:].index(machine) > idx:
                idx = macLi[i:].index(machine) 
                changeMac = machine
        # 멀티탭의 기기를 빼주고, 현재 기기를 꽂아준다.
        multitap[multitap.index(changeMac)] = macLi[i]
        idx = -1 # 인덱스 초기값 재설정
        answer += 1 # 멀티탭을 뽑은 횟수 카운트
print(answer)

