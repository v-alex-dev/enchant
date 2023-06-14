"""
URL configuration for desEnchantee project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from player.views import PlayerViewSet
from enchantement.views import EnchantementViewSet
from party.views import PartyViewSet
from game.views import GameViewSet

router = routers.DefaultRouter()
router.register(r'players', PlayerViewSet)
router.register(r'enchantement', EnchantementViewSet)
router.register(r'partyDate', PartyViewSet)
router.register(r'game', GameViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
]
