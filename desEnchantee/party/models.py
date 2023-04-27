from django.db import models

# Create your models here.


class Party(models.Model):
    party_date = models.DateField()
