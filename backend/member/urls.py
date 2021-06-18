from django.urls import path, include
from .views import mypageInfo, signUp, signIn

urlpatterns = [
    path('<int:id>', mypageInfo),
    path('signUp/', signUp),
    path('signIn/', signIn),
]
