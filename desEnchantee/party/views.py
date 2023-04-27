from rest_framework import viewsets
from .serializers import PartySerializer
from .models import Party


class PartyViewSet(viewsets.ModelViewSet):
    queryset = Party.objects.all()
    serializer_class = PartySerializer
