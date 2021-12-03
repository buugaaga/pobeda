from django.db import models
from django_extensions.db.models import TimeStampedModel

# Create your models here.


class Reestr(TimeStampedModel):

    # col 7  -  Местоположение загрязненного участка
    location = models.CharField(
        'Местоположение загрязненного участка', default=None, null=True, blank=True, max_length=1024)

    # col 11 - Дата регистрации в Реестре
    reg_date = models.DateField(
        'Дата регистрации в Реестре', default=None, blank=True)

    # col 15 - Категория земель до загрязнения
    category = models.CharField(
        'Категория земель до загрязнения', default=None, null=True, blank=True, max_length=1024)

    # col 17 - Площадь загрязненного участка, га
    area = models.FloatField(
        'Площадь загрязненного участка, га', default=None, null=True, blank=True)

    # col 21 - Долгота
    lon = models.FloatField('Долгота', default=None, null=True, blank=True)

    # col 22 - Широта
    lat = models.FloatField('Широта', default=None, null=True, blank=True)

