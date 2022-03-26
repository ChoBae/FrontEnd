# 메뉴 리뉴얼

from itertools import combinations
import re
def solution(orders, course):
    answer = [] # 답안 
    # *(1) 코스 개수 만큼 반복(개수 만큼 나눠줘야함에도 이유가 있음)
    for courseNum in course:
        # 딕셔너리 초기화
        orderDict = {}
        # 1번 손님부터 주문 반복
        for order in orders:
            # 문자열인 주문사항을 알파벳 순으로 정렬
            order = ''.join(sorted(order))	
            # *(1) 코스 개수 만큼 주문사항의 경우의 수 리스트 생성 
            orderList = list(combinations(order, courseNum))
            # 경우의 수 반복
            for i in orderList:
                print(i)
                # *(2) 딕셔너리에 넣을때 붙어있는 문자열로 보내주기 위한 -> 경우의수를 나눌때 문자열 형식이 해체됨
                alp = re.sub(r'[^A-Z]','', str(i))
                # 딕셔너리 갱신
                if alp not in orderDict:
                    orderDict[alp] = 1
                else:
                    orderDict[alp] += 1
        # *(1) 코스 개수 중 가장 큰 밸류값 뽑아서 넣어줌 (단 1일 경우 제외)
        maxKey = [k for k, v in orderDict.items() if max(orderDict.values()) == v and max(orderDict.values()) != 1]
        for i in maxKey:
            answer.append(i)    
    # 알파벳 순 정렬
    answer.sort()   
    return answer

solution(["XYZ", "XWY", "WXA"], [2,3,4])