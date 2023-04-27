from django.db import models
from player.models import Player
from party.models import Party
from enchantement.models import Enchantement

# Create your models here.


class Game(models.Model):
    player_FK = models.ForeignKey(Player, on_delete=models.CASCADE)
    enchantement_FK = models.ForeignKey(Enchantement, on_delete=models.CASCADE)
    party_FK = models.ForeignKey(Party, on_delete=models.CASCADE)
    des_number = models.IntegerField(default=0)
