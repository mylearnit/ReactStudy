from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Account(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE, blank=True, null=True)
    branch = models.CharField(max_length=100)
    ac_no = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    telephone = models.CharField(max_length=100, blank=True)
    pan = models.CharField(max_length=100, blank=True)
    email= models.EmailField(blank=True)