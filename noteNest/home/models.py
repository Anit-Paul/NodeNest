from django.conf import settings
from django.db import models

class Note(models.Model):
    name = models.CharField(max_length=100)
    content = models.TextField()
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        to_field='email',
        on_delete=models.CASCADE,
        related_name='notes'
    )

    def __str__(self):
        return f"{self.name} by {self.user.email}"

    class Meta:
        unique_together = ('name', 'user')
        verbose_name = "Note"
        verbose_name_plural = "Notes"