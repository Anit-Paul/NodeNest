from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import UserSerializer
from rest_framework.response import Response
from rest_framework import status
from .models import MyUser
# Create your views here.

class signinAPI(APIView):
    def post(self,request):
        serializer=UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message":"Data saved successfully"},status=status.HTTP_201_CREATED)
        else:
            return Response({"error":serializer.errors},status=status.HTTP_400_BAD_REQUEST)
    def get(self,request):
        users = MyUser.objects.all()
        serializer=UserSerializer(users,many=True)
        return Response({"users":serializer.data},status=status.HTTP_200_OK)