from rest_framework.routers import DefaultRouter
from django.urls import path

from core import views
from core.views import ReesrtViewSet, AirportsViewSet


urlpatterns = [
    path('check_avail', views.check_avail),
]

router = DefaultRouter()
router.register(r'reestr', ReesrtViewSet, basename='reestr')
router.register(r'airports', AirportsViewSet, basename='airports')
urlpatterns = router.urls
