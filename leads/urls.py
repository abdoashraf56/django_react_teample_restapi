from django.urls import path
from . import views

urlpatterns = [
    path('api/lead/', views.LeadsList.as_view() ),
]