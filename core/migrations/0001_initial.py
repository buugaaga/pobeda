# Generated by Django 3.2.9 on 2021-12-02 23:00

from django.db import migrations, models
import django_extensions.db.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Reestr',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('field1', models.CharField(blank=True, default=None, max_length=1024, null=True, verbose_name='Предприятие')),
                ('field2', models.CharField(blank=True, default=None, max_length=1024, null=True, verbose_name='Лицензионный участок: Наименование')),
                ('field3', models.CharField(blank=True, default=None, max_length=1024, null=True, verbose_name='Лицензионный участок: Номер')),
                ('field4', models.CharField(blank=True, default=None, max_length=1024, null=True, verbose_name='Вид приоритетного заглязняющего вещества')),
                ('field5', models.CharField(blank=True, default=None, max_length=1024, null=True, verbose_name='Регистрационный номер загрязненного участка (предприятия)')),
                ('field6', models.CharField(blank=True, default=None, max_length=1024, null=True, verbose_name='Регистрационный номер загрязненного участка в Реестре')),
                ('field7', models.CharField(blank=True, default=None, max_length=1024, null=True, verbose_name='Старые регистрационные номера (примечание)')),
                ('field8', models.CharField(blank=True, default=None, max_length=1024, null=True, verbose_name='Местоположение загрязненного участка')),
                ('field9', models.CharField(blank=True, default=None, max_length=1024, null=True, verbose_name='Административный район')),
                ('field10', models.CharField(blank=True, default=None, max_length=1024, null=True, verbose_name='Координаты загрязненного участка (в географической системе координат): Долгота')),
                ('field11', models.CharField(blank=True, default=None, max_length=1024, null=True, verbose_name='Координаты загрязненного участка (в географической системе координат): Широта')),
                ('field12', models.CharField(blank=True, default=None, max_length=1024, null=True, verbose_name='Дата регистрации в Реестре')),
                ('field13', models.CharField(blank=True, default=None, max_length=1024, null=True, verbose_name='Дата факта последнего разлива')),
                ('field14', models.CharField(blank=True, default=None, max_length=1024, null=True, verbose_name='Акт технического расследования: Номер')),
                ('field15', models.CharField(blank=True, default=None, max_length=1024, null=True, verbose_name='Акт технического расследования: Дата')),
                ('field16', models.CharField(blank=True, default=None, max_length=1024, null=True, verbose_name='Категория земель до загрязнения')),
                ('field17', models.CharField(blank=True, default=None, max_length=1024, null=True, verbose_name='Наличие специальных защитных зон')),
                ('field18', models.CharField(blank=True, default=None, max_length=1024, null=True, verbose_name='Площадь загрязненного участка, га')),
                ('field19', models.CharField(blank=True, default=None, max_length=1024, null=True, verbose_name='Уровень загрязнения почв и земель нефтью,  нефтепродуктами, мг/кг')),
                ('field20', models.CharField(blank=True, default=None, max_length=1024, null=True, verbose_name='Уровень содержания нефти, нефтепродуктов в донных отложениях водных объектов, мг/кг;  уровень содержания нефти, нефтепродуктов в поверхностных водах, мг/куб.дм')),
                ('field21', models.CharField(blank=True, default=None, max_length=1024, null=True, verbose_name='Год планируемой рекультивации')),
            ],
            options={
                'get_latest_by': 'modified',
                'abstract': False,
            },
        ),
    ]