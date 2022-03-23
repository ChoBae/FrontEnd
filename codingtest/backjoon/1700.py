# 멀티탭 스케줄링

n, k = map(int, input().split())
machineLi = list(map(int, input().split()))
tmp = []
idx, maxIdx = 0, 0
answer = 0


for i in range(k):
    # 멀티탭에 같은 용품이 꽂혀있을때
    if machineLi[i] in tmp: 
        continue
    # 멀티탭이 비어있을때 -> 넣어줌
    if len(tmp) < n:
        tmp.append(machineLi[i])
    # 멀티탭에 꽂혀있지 않은 용품이고, 멀티탭이 꽉찼을때 
    else:
        # 멀티탭
        for mac in tmp:
            # 멀티탭이 후에 사용되지 않으면 바로 인덱스 처리해주고 브레이크
            if mac not in machineLi[i:]:
                idx = mac
                break
            # 멀티탭이 후에 사용될때 가장 뒤에 사용하는 것을 빼준다.
            elif machineLi[i:].index(mac) > maxIdx:
                maxIdx = machineLi[i:].index(mac)
                idx = mac

        # 멀티탭에서 뽑아주고 현재 기기를 꼽아준다.
        tmp[tmp.index(idx)] = machineLi[i]
        # 멀티탭 뽑은횟수 증가.
        answer += 1
    
print(answer)        