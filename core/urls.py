from rest_framework.routers import DefaultRouter
from django.urls import path

from core import views


urlpatterns = [
    path('check_avail', views.check_avail),
]

# router = DefaultRouter()
# router.register(r'api', check_avail, basename='api')
# urlpatterns = router.urls
