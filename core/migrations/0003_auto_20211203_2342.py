# Generated by Django 3.2.9 on 2021-12-03 19:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_alter_reestr_field18'),
    ]

    operations = [
        migrations.RenameField(
            model_name='reestr',
            old_name='field18',
            new_name='area',
        ),
        migrations.RenameField(
            model_name='reestr',
            old_name='field16',
            new_name='category',
        ),
        migrations.RenameField(
            model_name='reestr',
            old_name='field8',
            new_name='location',
        ),
        migrations.RemoveField(
            model_name='reestr',
            name='field1',
        ),
        migrations.RemoveField(
            model_name='reestr',
            name='field10',
        ),
        migrations.RemoveField(
            model_name='reestr',
            name='field11',
        ),
        migrations.RemoveField(
            model_name='reestr',
            name='field12',
        ),
        migrations.RemoveField(
            model_name='reestr',
            name='field13',
        ),
        migrations.RemoveField(
            model_name='reestr',
            name='field14',
        ),
        migrations.RemoveField(
            model_name='reestr',
            name='field15',
        ),
        migrations.RemoveField(
            model_name='reestr',
            name='field17',
        ),
        migrations.RemoveField(
            model_name='reestr',
            name='field19',
        ),
        migrations.RemoveField(
            model_name='reestr',
            name='field2',
        ),
        migrations.RemoveField(
            model_name='reestr',
            name='field20',
        ),
        migrations.RemoveField(
            model_name='reestr',
            name='field21',
        ),
        migrations.RemoveField(
            model_name='reestr',
            name='field3',
        ),
        migrations.RemoveField(
            model_name='reestr',
            name='field4',
        ),
        migrations.RemoveField(
            model_name='reestr',
            name='field5',
        ),
        migrations.RemoveField(
            model_name='reestr',
            name='field6',
        ),
        migrations.RemoveField(
            model_name='reestr',
            name='field7',
        ),
        migrations.RemoveField(
            model_name='reestr',
            name='field9',
        ),
        migrations.AddField(
            model_name='reestr',
            name='lat',
            field=models.FloatField(blank=True, default=None, null=True, verbose_name='Широта'),
        ),
        migrations.AddField(
            model_name='reestr',
            name='lon',
            field=models.FloatField(blank=True, default=None, null=True, verbose_name='Долгота'),
        ),
        migrations.AddField(
            model_name='reestr',
            name='reg_date',
            field=models.DateField(blank=True, default=None, verbose_name='Дата регистрации в Реестре'),
        ),
    ]