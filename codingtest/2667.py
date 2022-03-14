# 실버 1 '단지번호붙이기'
from collections import deque
# bfs(x,y(좌표), mapInf(좌표 리스트))
def bfs(x, y, mapInf):
    n = len(mapInf)
    queue = deque([(x, y)])
    mapInf[x][y] = 0    # 방문처리
    count = 1   # 카운트값

    while queue:    # 큐가 빌때까지
        newX, newY = queue.popleft()
        # 상하좌우 탐색하고 넣어주기
        for i in range(4):
            nx = newX + dx[i]
            ny = newY + dy[i]
            # 그래프 좌표를 초과하지 않고, 방문하지 않았을 경우
            if 0 <= nx < n and 0 <= ny < n and mapInf[nx][ny] == 1:
								# 방문처리, 큐에 넣어주기
                mapInf[nx][ny] = 0
                queue.append((nx, ny))
                count += 1  # 집 개수 카운트
    # n단지의 집 개수
    return count


# n(지도의 크기 n x n)
n = int(input())
mapInf = [] # 지도 좌표
count = []  # 단지별 갯수
# 상하 좌우
dx = [-1 , 1, 0, 0]
dy = [0, 0, -1, 1]
# 맵 좌표 찍기
for i in range(n):
    mapInf.append(list(map(int, input())))
# 좌표 별로 bfs 진행
for i in range(n):
    for j in range(n):
        if mapInf[i][j] == 1:
            result = bfs(i,j, mapInf)
            count.append(result)

# 출력
count.sort()
print(len(count))
for i in count:
    print(i)