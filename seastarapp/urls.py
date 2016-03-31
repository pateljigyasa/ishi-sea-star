"""seastarapp URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import patterns,include, url
from django.contrib import admin 
from django.conf import settings
from django.conf.urls import handler400, handler403, handler404, handler500  


urlpatterns = [
    url(r'^grappelli/', include('grappelli.urls')), # grappelli URLS
    url(r'^admin/', include(admin.site.urls)),
    url(r'', include('seastar.urls')), 
]
handler404 = 'seastar.views.bad_request_handler'
handler403 = 'seastar.views.bad_request_handler'
handler400 = 'seastar.views.bad_request_handler'
handler500 = 'seastar.views.bad_request_handler'

"""This is for development only when debug is true to load static files for production it will slow the page load"""
"""if settings.DEBUG is False:   #if DEBUG is True it will be served automatically
    urlpatterns += patterns('',
            url(r'^static/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.STATIC_ROOT}),
    )"""
