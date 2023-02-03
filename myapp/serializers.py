from rest_framework import serializers
from myapp.models import CBtc

class CBtcOhlcvSerializer(serializers.ModelSerializer):
    class Meta:
        model = CBtc # 모델 설정
        fields = '__all__'