from rest_framework import serializers
from .models import Enchantement
# Create your views here.


class EnchantementSerializers(serializers.ModelSerializer):
    class Meta:
        model = Enchantement
        fields = "__all__"

    def create(self, validated_data):
        enchantement = Enchantement.objects.create(
            name=validated_data['name'],
            description=validated_data['description']
        )