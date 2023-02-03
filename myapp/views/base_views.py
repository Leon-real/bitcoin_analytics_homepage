from django.shortcuts import render
from myapp.models import CBtc
from django.core import serializers
import json

# 메인 페이지
def index(request):
    return render(request, 'myapp/dashboardPages/index.html')

def dashbord_upbit(request): # 업비트 대시보드
    datas = CBtc.objects.all()
    # dic_2 = serializers.serialize('json', datas) # 좀 더 테스트 해보아야함
    dicToJson = dbToJson(datas)
    
    return render(request, 'myapp/dashboardPages/dashbord_upbit.html', {'datas_set' : dicToJson, })

def dashbord_binance(request): # 바이낸스 대시보드
    return render(request, 'myapp/dashboardPages/dashbord_binance.html')

# 분석 페이지
def analytics_stcok(request): # 현물
    CBtc_data = CBtc.objects.all()
    return render(request, 'myapp/analizePages/stocks.html', {'ticker_data': CBtc_data,})
def analytics_future(request): # 선물
    return render(request, 'myapp/analizePages/future.html')

# 401, 404, 500 에러 페이지 렌더링
def page_not_found_401(request, exception):
    return render(request, 'myapp/errorPages/401.html', {})
def page_not_found_404(request, exception):
    return render(request, 'myapp/errorPages/404.html', {})
def page_not_found_500(request, exception=None):
    return render(request, 'myapp/errorPages/500.html', {})


# DB 데이터 Json 직렬화 하기
def dbToJson(datas): # 데이터 세트에는 index(타임프레임), open, high, low, close, volume 컬럼이 있어야한다.
    if datas==None:
        return None
    dic = {}
    dic["Date"] = [str(i.index) for i in datas]
    dic["Open"] = [i.open for i in datas]
    dic["High"] = [i.high for i in datas]
    dic["Low"] = [i.low for i in datas]
    dic["Close"] = [i.close for i in datas]
    dic["Volume"] = [i.volume for i in datas]
    
    dicToJson = json.dumps(dic)

    return dicToJson



