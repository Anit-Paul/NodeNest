from .models import Note
from rest_framework.serializers import ModelSerializer
from .models import Note
class NoteSerializer(ModelSerializer):
    class Meta:
        model=Note
        fields=['id','name','content']
        extra_kwargs = {
            "user": {'read_only': True}
        }