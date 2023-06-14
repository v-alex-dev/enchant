from rest_framework import serializers
from .models import Game
from player.serializers import PlayerSerializer
from enchantement.serializers import EnchantementSerializer


class GameSerializer(serializers.ModelSerializer):

    class Meta:
        model = Game
        fields = '__all__'

