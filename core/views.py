import datetime

from dateutil import parser
from django.shortcuts import render
from rest_framework import viewsets

from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, permission_classes, action
from rest_framework import viewsets, permissions, status as http_status
from rest_framework.response import Response

from core import tools
from core.serializers import ReesrtSerializer
from core.models import Reestr

# Create your views here.


@csrf_exempt
@api_view(['GET'])
@permission_classes((permissions.AllowAny,))
def check_avail(request):
    now = datetime.datetime.now()

    result = {
        'datetime': now
    }

    tools.send_telegram(f'check_avail: {now}')

    return Response(result, status=http_status.HTTP_200_OK)

class ReesrtViewSet(viewsets.ModelViewSet):
    serializer_class = ReesrtSerializer
    queryset = Reestr.objects.all()    
    authentication_classes = ()
    permission_classes = ()

    def list(self, request, *args, **kwargs):
        
        try:
            bdate = parser.parse(request.query_params.get('bdate'))
        except Exception as ex:
            bdate = datetime.date(2000, 1, 1)

        try:
            edate = parser.parse(request.query_params.get('edate'))
        except Exception as ex:
            edate = datetime.date(2030, 1, 1)


        qs = Reestr.objects.filter(reg_date__gte=bdate, reg_date__lte=edate).order_by('reg_date')

        serializer = self.get_serializer(qs, many=True)
        return Response(serializer.data)

