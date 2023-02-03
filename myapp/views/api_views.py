from django.shortcuts import render
from myapp.models import CBtc
from myapp.serializers import CBtcOhlcvSerializer
from rest_framework.response import Response
from rest_framework.views import APIView


class BtcAPI(APIView):
    def get(self, request):
        queryset = CBtc.objects.all()
        # print(queryset)
        serializer = CBtcOhlcvSerializer(queryset, many=True)
        return Response(serializer.data)