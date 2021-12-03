import json

from rest_framework import serializers
from core.models import Reestr
from core import tools


class ReesrtSerializer(serializers.ModelSerializer):
    map = serializers.SerializerMethodField()

    class Meta:
        model = Reestr
        # fields = '__all__'
        exclude = ('created', 'modified',)

    def get_map(self, obj):
        return tools.google_map(obj.lat, obj.lon)