from django.shortcuts import render
from rest_framework import generics
from .models import Lead
from .serializer import LeadSerializer

# Create your views here.
class LeadsList(generics.ListCreateAPIView):
    queryset = Lead.objects.all().order_by('create_at')
    serializer_class = LeadSerializer