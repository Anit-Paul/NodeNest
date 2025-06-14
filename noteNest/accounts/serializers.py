from rest_framework.serializers import ModelSerializer
from .models import MyUser

class UserSerializer(ModelSerializer):
    class Meta:
        model = MyUser
        fields = '__all__'
        extra_kwargs = {
            "password": {'write_only': True}
        }

    def create(self, validated_data):
        user = MyUser(email=validated_data['email'])
        user.set_password(validated_data['password'])
        user.save()
        return user
