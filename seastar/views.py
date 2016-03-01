from django.shortcuts import render

# Create your views here.

# Create your views here.
#Index view 
def index(request): 
    return render(request, 'index.html')
