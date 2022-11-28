from django.contrib import admin
from django.urls import path, include
from myapp.views import base_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('myapp/', include('myapp.urls')),
    path('', base_views.index, name='index'),
]


# 401, 404, 500 에러 페이지
handler401 = 'myapp.views.base_views.page_not_found_401'
handler404 = 'myapp.views.base_views.page_not_found_404'
handler500 = 'myapp.views.base_views.page_not_found_500'