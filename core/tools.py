import requests
from django.conf import settings


def send_telegram(mess):

    def telegram(text: str):
        api_token = settings.TG_API_TOKEN
        channel_id = settings.TG_CHANNEL_ID

        try:
            r = requests.get('https://api.telegram.org/bot{}/sendMessage'.format(api_token), params=dict(
                chat_id=channel_id,
                text=text
            ))

            if r.status_code != 200:
                raise Exception('telegram bot error')
        except Exception as ex:
            raise Exception(ex)

    telegram(mess)