from rest_framework import serializers
from core.models import Reestr, Airports
from core import tools


class ReesrtSerializer(serializers.ModelSerializer):
    map = serializers.SerializerMethodField()

    class Meta:
        model = Reestr
        exclude = ('created', 'modified',)

    def get_map(self, obj):
        return tools.google_map(obj.lat, obj.lon)


class AirportsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Airports
        exclude = ('created', 'modified',)
