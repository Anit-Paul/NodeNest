from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from . models import Note
from .serializers import NoteSerializer
from rest_framework.views import APIView
from django.contrib.auth.decorators import login_required

def addNoteAPI(request):
    return render(request,"home/addNode.html")

def homeAPI(request):
    return render(request, "home/index.html")
class noteAPI(APIView):
    permission_classes=[IsAuthenticated]
    def post(self,request):
        serializer=NoteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response({"msg":"note saved successfully"},status=status.HTTP_201_CREATED)
        else:
            return Response({"msg":serializer.errors},status=status.HTTP_400_BAD_REQUEST)
    def get(self,request):
        data=Note.objects.filter(user=request.user)
        serializer = NoteSerializer(data, many=True)
        return Response({"data": serializer.data}, status=status.HTTP_200_OK)