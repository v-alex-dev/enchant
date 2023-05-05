from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .serializers import GameSerializer
from .models import Game


class GameViewSet(viewsets.ModelViewSet):
    queryset = Game.objects.all()
    serializer_class = GameSerializer

    @action(detail=True, methods=['get'])
    def party_games(self, request, pk=None):
        games = Game.objects.filter(party_FK=pk)
        serializer = GameSerializer(games, many=True)
        return Response(serializer.data)
