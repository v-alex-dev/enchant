from django.urls import path
from .views import SuperuserAuthTokenView

urlpatterns = [
    path('auth/', SuperuserAuthTokenView.as_view()),
    # ...
]