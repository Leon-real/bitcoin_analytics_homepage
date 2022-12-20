
from django.shortcuts import render
from myapp.models import FBtc



# 메인 페이지
def index(request):
    return render(request, 'myapp/index.html')

# 분석 페이지
def analytics_stcok(request): # 현물
    FBtc_data = FBtc.objects.get()

    print("************************************************")
    print(FBtc_data)
    print("************************************************")


    return render(request, 'myapp/stocks.html', {'ticker_data': FBtc_data})
def analytics_future(request): # 선물
    return render(request, 'myapp/future.html')

# 401, 404, 500 에러 페이지 렌더링
def page_not_found_401(request, exception):
    return render(request, 'myapp/401.html', {})
def page_not_found_404(request, exception):
    return render(request, 'myapp/404.html', {})
def page_not_found_500(request, exception=None):
    return render(request, 'myapp/500.html', {})