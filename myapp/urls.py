from django.urls import path
from . import views
from .views import base_views


app_name = 'myapp'

urlpatterns = [
		path('', base_views.index, name='index'),
]