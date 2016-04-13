""" URL configuraton for Sea Star website""" 
from django.conf.urls import url
from . import views  
from django.conf.global_settings import STATICFILES_DIRS 
from django.views.decorators.cache import cache_page
#from django.contrib.staticfiles.urls import staticfiles_urlpatterns
 

urlpatterns = [
    url(r'^$', cache_page(60 * 15)(views.index), name='index'),  
    url(r'^contact-response/$', cache_page(60 * 15)(views.contact_response),name='contact_response'), 
    url(r'^response-thanks/$', cache_page(60 * 15)(views.response_thanks)),
    url(r'^security/$', cache_page(60 * 15)(views.security)),
    url(r'^cloudmate/$', cache_page(60 * 15)(views.cloudmate)),
    url(r'^eye4k/$', cache_page(60 * 15)(views.eye4k)),
    url(r'^video-production/$', cache_page(60 * 15)(views.videoproduction)),
    url(r'^game-view/$', cache_page(60 * 15)(views.gameview)),
    url(r'^careers/$', cache_page(60 * 15)(views.careers)),
    url(r'^strive/$', cache_page(60 * 15)(views.strive)),
    url(r'^index/$', cache_page(60 * 15)(views.index),name='index'), 
    url(r'^case-study-video-solutions/$', cache_page(60 * 15)(views.case_study_video_solutions),name='case_study_video_solutions'), 
    url(r'^white-paper-broadcasting/$', cache_page(60 * 15)(views.white_paper_broadcasting),name='white_paper_broadcasting'), 
] 

 

 
 

