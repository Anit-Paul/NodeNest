"""
URL configuration for noteNest project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from .views import noteAPI,homeAPI,addNoteAPI,noteview
urlpatterns = [
    path("",homeAPI,name="homeAPI"),
    path("notes/",noteAPI.as_view(),name="noteAPI"),
    path("notes/views/",noteview,name="noteview"),
    path("addnote/",addNoteAPI,name="addNoteAPI"),
]
