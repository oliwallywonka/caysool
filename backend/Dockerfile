FROM python:3.9

ENV PYTHONUNBUFFERED 1

WORKDIR /backend

RUN pip install --upgrade pip

COPY requerimientos.txt /backend/requerimientos.txt

RUN pip install -r requerimientos.txt

COPY . /backend

EXPOSE 8000

#CMD ["python", "manage.py", "migrate"]

#CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]