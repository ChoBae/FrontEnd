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
            if mac not in machineLi[i:]:
                idx = mac
                break
            #
            elif machineLi[i:].index(mac) > maxIdx:
                maxIdx = machineLi[i:].index(mac)
                idx = mac

        tmp[tmp.index(idx)] = machineLi[i]
        answer += 1
    
print(answer)        