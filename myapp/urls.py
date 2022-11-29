from django.urls import path
from .views import base_views


app_name = 'myapp'

urlpatterns = [
		path('', base_views.index, name='index'),
		path('analyticstocks', base_views.analytics_stcok, name='anal_stocks'),
		path('analyticfuture', base_views.analytics_future, name='anal_future'),
]