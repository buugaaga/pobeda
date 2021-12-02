FROM python:3.6.12-slim

ENV APP_HOME=/app
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR $APP_HOME

#RUN apt update && \
#    apt upgrade -y
#RUN apt install -y \
#    # > opencv
#    ffmpeg libsm6 libxext6 \
#    # > pyzbar
#    libzbar0

COPY requirements.txt $APP_HOME/requirements.txt
COPY requirements_ext.txt $APP_HOME/requirements_ext.txt

RUN python -m pip install --upgrade pip setuptools wheel
RUN pip install -r requirements.txt
RUN pip install -r requirements_ext.txt

COPY ./ $APP_HOME

#ENTRYPOINT [ "python", "manage.py", "runserver", "8000" ]