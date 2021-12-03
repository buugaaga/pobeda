import csv
from datetime import datetime
from dateutil import parser

from os import listdir, path
from os.path import isfile, join

from django.conf import settings
from django.core.management.base import BaseCommand, CommandError

from core.models import Reestr, Airports


class Command(BaseCommand):
    help = 'Export from csv file'

    def add_arguments(self, parser):
        parser.add_argument('--file_reestr', nargs='+', type=str,
                            default='reestr_pure.csv')
        parser.add_argument('--file_airports', nargs='+', type=str,
                            default='airports.csv')

    def handle(self, *args, **options):
        def safe_cast(val, float, default=None):
            try:
                return float(val)
            except (ValueError, TypeError):
                return default

        path_to_file = path.join(settings.BASE_DIR, 'exports', options['file_reestr'])

        Reestr.objects.all().delete()

        with open(path_to_file, encoding='utf-8-sig', newline='') as f:
            reader = csv.reader(f, delimiter=',')
            for row in reader:
                _, created = Reestr.objects.get_or_create(
                    location=row[7].strip(),
                    reg_date=parser.parse(row[11].strip()),
                    category=row[15].strip(),
                    area=safe_cast(row[17].strip().replace(',', '.'), float),
                    lon=safe_cast(row[21].strip().replace(',', '.'), float),
                    lat=safe_cast(row[22].strip().replace(',', '.'), float),
                    )

        print('EXPORT REESTR DONE')

        # ---

        path_to_file = path.join(
            settings.BASE_DIR, 'exports', options['file_airports'])

        Airports.objects.all().delete()

        with open(path_to_file, encoding='utf-8-sig', newline='') as f:
            reader = csv.reader(f, delimiter=';')
            for row in reader:
                _, created = Airports.objects.get_or_create(
                    name=row[0].strip(),
                    code_ikao=row[1].strip(),
                    lat=safe_cast(row[2].strip().replace(',', '.'), float),
                    lon=safe_cast(row[3].strip().replace(',', '.'), float),
                    height=safe_cast(row[4].strip().replace(',', '.'), float),
                    len_vvp=safe_cast(row[5].strip().replace(',', '.'), float),
                    width_vvp=safe_cast(
                        row[6].strip().replace(',', '.'), float),
                    coating=row[7].strip()
                )

        print('EXPORT AIRPORTS DONE')
