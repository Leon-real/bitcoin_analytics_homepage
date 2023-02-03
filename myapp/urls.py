from django.urls import path
from .views import base_views
from .views.api_views import BtcAPI

app_name = 'myapp'

urlpatterns = [
		# 프론트엔드 부분 주소
		path('', base_views.index, name='index'),
		path('analyticstocks/', base_views.analytics_stcok, name='anal_stocks'),
		path('analyticfuture/', base_views.analytics_future, name='anal_future'),
		path('dashbordUpbit/', base_views.dashbord_upbit, name='dash_upbit'),
		path('dashbordBinance/', base_views.dashbord_binance, name='dash_binance'),
		
		# API 주소
		path('api/v1', BtcAPI.as_view(), name='api_v1')
]