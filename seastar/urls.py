""" URL configuraton for Sea Star website""" 
from django.conf.urls import url
from . import views 
from django.conf.global_settings import STATICFILES_DIRS
 

#from django.contrib.staticfiles.urls import staticfiles_urlpatterns
 

urlpatterns = [
    url(r'^$', views.index, name='index'), 
    url(r'^contact-response/$', views.contact_response,name='contact_response'), 
    url(r'^response-thanks/$', views.response_thanks),
     
     
    
] 
 

