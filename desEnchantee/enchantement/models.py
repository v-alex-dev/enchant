from django.db import models

# Create your models here.


class Enchantement(models.Model):
    name = models.CharField(max_length=150)
    description = models.CharField(max_length=550)

    def __str__(self):
        return self.name
