from rest_framework import serializers
from .models import Game


class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = '__all__'

    def create(self, validated_data):
        game = Game.objects.create(
            player_FK=validated_data['player_FK'],
            enchantement_FK=validated_data['enchantement_FK'],
            party_FK=validated_data['party_FK'],
            des_number=validated_data['des_number']
        )
        return game
