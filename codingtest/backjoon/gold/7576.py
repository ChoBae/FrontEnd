# 토마토 bfs/dfs
# bfs를 위한 deque
from collections import deque
# bfs
def bfs(queue):
    while queue:    # 큐가 빌때까지
        x, y = queue.popleft()
        # 상하좌우 탐색 과정
        for i in range(4):
            nx = dx[i] + x 
            ny = dy[i] + y
            # 안익은 토마토가 있을때 -> 이동거리 업데이트해서 넘겨주기
            if 0 <= nx <n and 0 <= ny <m and mapLi[nx][ny] == 0:
                mapLi[nx][ny] = mapLi[x][y] + 1
                queue.append([nx, ny])
                                    
# 입력
answer = 0
m, n = map(int, input().split())
mapLi = [list(map(int, input().split())) for _ in range(n)]
# 상하좌우
dx = [1, -1, 0, 0]
dy = [0, 0, 1, -1]
queue = deque([])
# 바로 bfs처리 못하는 이유는 **시작점이 여러개일 경우도 있기 때문에
for i in range(n):
    for j in range(m):
        if mapLi[i][j] == 1:
            queue.append([i,j])
# 파라미터값으로 시작점을 보내줘서 bfs 실행
bfs(queue)
# 출력
for map in mapLi:
    # 아직 안익은 토마토가 있을때 -> 구하지 못한 경우
    if 0 in map:
        print(-1)
        exit(0)
    # 답 업데이트
    answer = max(answer, max(map))
# 편의상 시작을 1로 시작해기 때문에 빼준다        
print(answer-1)
