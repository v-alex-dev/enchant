from rest_framework import serializers
from .models import Enchantement
# Create your views here.


class EnchantementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Enchantement
        fields = "__all__"
