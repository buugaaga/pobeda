# Generated by Django 3.2.9 on 2021-12-02 23:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reestr',
            name='field18',
            field=models.FloatField(blank=True, default=None, null=True, verbose_name='Площадь загрязненного участка, га'),
        ),
    ]
