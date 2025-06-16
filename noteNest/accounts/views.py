from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import UserSerializer
from rest_framework.response import Response
from rest_framework import status
from .models import MyUser
from django.contrib.auth import authenticate
from .mail import Mail
from rest_framework.authtoken.models import Token
# Create your views here.


def login(request):
    return render(request,"auth/login/index.html")
def signin(request):
    return render(request,"auth/signin/index.html")
class signinAPI(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user,token = serializer.save()  # Capture the returned user from create()
            #token, _ = Token.objects.get_or_create(user=user)
            return Response({
                "message": "Data saved successfully",
                "token": token.key
            }, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def get(self,request):
        users = MyUser.objects.all()
        serializer=UserSerializer(users,many=True)
        return Response({"users":serializer.data},status=status.HTTP_200_OK)
    
class loginAPI(APIView):
    def post(self,request):
        email=request.data['email']
        password=request.data['password']
        user=authenticate(email=email,password=password)
        if user:
            token, _ = Token.objects.get_or_create(user=user)
            return Response({"message": "Login Successful", "token": token.key}, status=status.HTTP_200_OK)
        else:
            return Response({"message":"Login failed"},status=status.HTTP_400_BAD_REQUEST)

class mailAPI(APIView):
    def get(self, request):
        email = request.query_params.get('email')  # Get email from URL query
        print(email)
        if not email:
            return Response({"message": "email is required"}, status=status.HTTP_400_BAD_REQUEST)
        mailer = Mail()
        msg, otp = mailer.send_email(email)
        if msg:
            return Response({"message": "success", "otp": otp}, status=status.HTTP_200_OK)
        else:
            return Response({"message": "failed", "otp": otp}, status=status.HTTP_400_BAD_REQUEST)
