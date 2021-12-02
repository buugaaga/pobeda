import datetime
from django.shortcuts import render
from rest_framework import viewsets

from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, permission_classes, action
from rest_framework import viewsets, permissions, status as http_status
from rest_framework.response import Response

# Create your views here.


@csrf_exempt
@api_view(['GET'])
@permission_classes((permissions.AllowAny,))
def check_avail(request):
    result = {
        'datetime': datetime.datetime.now()
    }

    return Response(result, status=http_status.HTTP_200_OK)

# class RestViewSet(viewsets.ModelViewSet):
#     serializer_class = PlanSerializer
#     queryset = Plan.objects.all()
#     lookup_field = 'slug'
#     authentication_classes = (SessionAuthentication, TokenAuthentication)
#     permission_classes = (IsAuthenticated,)
