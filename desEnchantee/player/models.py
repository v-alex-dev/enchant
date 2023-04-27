from django.db import models


# Create your models here.
class Player(models.Model):
    firstName = models.CharField(max_length=150)
    lastName = models.CharField(max_length=150)
    world = models.CharField(max_length=50)

