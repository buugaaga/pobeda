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


class Airports(TimeStampedModel):
    name = models.CharField(
        'Аэропорт', default=None, null=True, blank=True, max_length=1024)
    code_ikao = models.CharField(
        'Код аэродрома ИКАО', default=None, null=True, blank=True, max_length=1024)
    lon = models.FloatField('Долгота (E)', default=None, null=True, blank=True)
    lat = models.FloatField('Широта (N)', default=None, null=True, blank=True)
    height = models.FloatField(
        'Высота над уровнем моря', default=None, null=True, blank=True)
    len_vvp = models.FloatField(
        'Длина ВПП', default=None, null=True, blank=True)
    width_vvp = models.FloatField(
        'Ширина ВПП', default=None, null=True, blank=True)
    coating = models.CharField(
        'Покрытие основной ВПП', default=None, null=True, blank=True, max_length=1024)
