# 거리두기 확인하기
# def solution(places):
#     answer = []
#     for place in places:
#         for check in place:
#             if check == 'P':
#                 for i in range(len(check)):
#                     for j in range(2):
                        
#     return answer

# def dfs(start, end):
    


from collections import deque

def bfs(p):
    
    start = []
    
    for i in range(5): # 시작점이 되는 P 좌표 구하기
        for j in range(5):
            if p[i][j] == 'P':
                start.append([i, j])
    
    for s in start:
        
        queue = deque([s])  # 큐에 초기값
        visited = [[0]*5 for i in range(5)]   # 방문 처리 리스트
        distance = [[0]*5 for i in range(5)]  # 경로 길이 리스트
        visited[s[0]][s[1]] = 1
        
        while queue:
            
            y, x = queue.popleft()
        
            dx = [-1, 1, 0, 0]  # 좌우
            dy = [0, 0, -1, 1]  # 상하

            for i in range(4):
                nx = x + dx[i]
                ny = y + dy[i]
                # 상하좌우 이동이 가능하고, 방문하지 않았을때
                if 0<=nx<5 and 0<=ny<5 and visited[ny][nx] == 0:
                    # 이동한 좌표가  'O'(빈자리)일때
                    if p[ny][nx] == 'O':
                        # 이동 좌표 큐에 넣어줌
                        queue.append([ny, nx])
                        visited[ny][nx] = 1 # 방문처리
                        # 맨허튼 길이 더해주기
                        distance[ny][nx] = distance[y][x] + 1
                    # 거리 두기 조건에 만족하지 못할때(맨허튼 거리 2가 안될때)
                    if p[ny][nx] == 'P' and distance[y][x] <= 1:
                        return 0
        print(distance)    
    return 1


def solution(places):
    answer = []
    
    for i in places:
        answer.append(bfs(i))
    
    return answer

solution([["POOOP", 
           "OXXOX",
           "OPXPX",
           "OOXOX",
           "POXXP"],
          
          ["POOPX",
           "OXPXP",
           "PXXXO",
           "OXXXO",
           "OOOPP"], 
          
          ["PXOPX",
           "OXOXP",
           "OXPOX",
           "OXXOP",
           "PXPOX"], 
          
          ["OOOXX",
           "XOOOX",
           "OOOXX",
           "OXOOX",
           "OOOOO"], 
          
          ["PXPXP",
           "XPXPX",
           "PXPXP",
           "XPXPX",
           "PXPXP"]])