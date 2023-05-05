from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .serializers import PartySerializer
from .models import Party


class PartyViewSet(viewsets.ModelViewSet):
    queryset = Party.objects.all()
    serializer_class = PartySerializer

    @action(detail=False, methods=['get'])
    def last_party(self, request):
        last_party = self.queryset.latest('id')
        serializer = self.get_serializer(last_party)
        return Response(serializer.data)
