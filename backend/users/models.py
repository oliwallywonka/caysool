from pyexpat import model
from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    rol = models.BooleanField(default=False)
    phone = models.IntegerField(blank=False)
    phone2 = models.IntegerField(blank=True, null=True)
    username = models.IntegerField(unique=True, blank=False)
    first_name = models.CharField(max_length=150, blank=False)
    last_name = models.CharField(max_length=150, blank=False)
    email = models.EmailField(blank=True, null=True)
    
#    USERNAME_FIELD = 'ci'
#    REQUIRED_FIELDS = []
