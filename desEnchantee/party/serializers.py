from rest_framework import serializers
from .models import Party


class PartySerializer(serializers.ModelSerializer):
    class Meta:
        model = Party
        fields = '__all__'

    def create(self, validated_data):
        party = Party.objects.create(
            party_date=validated_data['party_date']
        )
        return party
