from rest_framework import viewsets
from .serializers import EnchantementSerializer
from .models import Enchantement


class EnchantementViewSet(viewsets.ModelViewSet):
    queryset = Enchantement.objects.all()
    serializer_class = EnchantementSerializer
