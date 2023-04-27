from rest_framework import serializers
from .models import Player


class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = '__all__'

    def create(self, validated_data):
        player = Player.objects.create(
            firstName=validated_data['firstName'],
            lastName=validated_data['lastName'],
            world=validated_data['world']
        )
        return player
