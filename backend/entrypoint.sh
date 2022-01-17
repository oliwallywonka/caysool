#!/bin/sh

if [ "$DATABASE" = "mariadb" ]
then
    echo "Waiting for mariadb..."

    while ! nc -z $SQL_HOST $SQL_PORT; do
      sleep 0.1
    done

    echo "mariadb started"
fi

python manage.py migrate
python manage.py runserver 0.0.0.0:8000

exec "$@"