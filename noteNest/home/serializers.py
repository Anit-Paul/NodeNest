from .models import Note
from rest_framework.serializers import ModelSerializer
from .models import Note
class NoteSerializer(ModelSerializer):
    class Meta:
        model=Note
        fields='__all__'
        extra_kwargs = {
            "user": {'write_only': True}
        }