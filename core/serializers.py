import json

from rest_framework import serializers
from core.models import Reestr


class ReesrtSerializer(serializers.ModelSerializer):

    class Meta:
        model = Reestr
        fields = '__all__'
        # exclude = ('image_url', 'slug')
