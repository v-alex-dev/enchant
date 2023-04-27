from rest_framework import viewsets
from .serializers import EnchantementSerializers
from .models import Enchantement


class EnchantementViewSet(viewsets.ModelViewSet):
    queryset = Enchantement.objects.all()
    serializer_class = EnchantementSerializers
