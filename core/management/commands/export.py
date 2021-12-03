import csv
from datetime import datetime
from dateutil import parser

from os import listdir, path
from os.path import isfile, join

from django.conf import settings
from django.core.management.base import BaseCommand, CommandError

from core.models import Reestr


class Command(BaseCommand):
    help = 'Export file Reestr'

    def add_arguments(self, parser):
        parser.add_argument('--file', nargs='+', type=str,
                            default='reestr_pure.csv')

    def handle(self, *args, **options):
        def safe_cast(val, float, default=None):
            try:                
                return float(val)
            except (ValueError, TypeError):
                return default
        
        path_to_file = path.join(settings.BASE_DIR, 'exports', options['file'])

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

        print('EXPORT DONE')
