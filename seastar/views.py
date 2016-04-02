from django.shortcuts import render
from seastar.forms import ContactForm 
from seastar.models import Variables
from django.http import HttpResponseRedirect
from django.core.mail import send_mail
from django.forms.forms import Form 
from seastarapp.settings import APP_CONTACTUS_EMAIL_ADDRESS
from django.shortcuts import render_to_response
from django.template import RequestContext

 
# Create your views here.
#Index view 
def bad_request_handler(request):
    form=ContactForm() 
    data_dict={}
    query_data = Variables.objects.all().filter(key__startswith='index')
    for data in query_data:
       data_dict[data.key]= data.value 
    response = render_to_response('index.html', {'form':form,'index_data': data_dict},
                                  context_instance=RequestContext(request))
    response.status_code = 404
    return response

def index(request): 
    form=ContactForm() 
    data_dict={}
    query_data = Variables.objects.all().filter(key__startswith='index')
    for data in query_data:
       data_dict[data.key]= data.value 
    return render(request, 'index.html',{'form':form,'index_data': data_dict})

def security(request):
    data_dict={}
    query_data = Variables.objects.all().filter(key__startswith='security')
    for data in query_data:
       data_dict[data.key]= data.value  
    return render(request, 'security.html',{'page_data': data_dict})

def cloudmate(request): 
    data_dict={}
    query_data = Variables.objects.all().filter(key__startswith='cloudmate')
    for data in query_data:
       data_dict[data.key]= data.value
       
    return render(request, 'cloudmate.html',{'page_data': data_dict})

def eye4k(request): 
    data_dict={}
    query_data = Variables.objects.all().filter(key__startswith='eye4k')
    for data in query_data:
       data_dict[data.key]= data.value
    return render(request, 'eye4k.html',{'page_data': data_dict})

def videoproduction(request): 
    data_dict={}
    query_data = Variables.objects.all().filter(key__startswith='video')
    for data in query_data:
       data_dict[data.key]= data.value 
        
    return render(request, 'video_production.html',{'page_data': data_dict}) 

def gameview(request): 
    data_dict={}
    query_data = Variables.objects.all().filter(key__startswith='gameview')
    for data in query_data:
       data_dict[data.key]= data.value
       
    return render(request, 'gameview.html',{'page_data': data_dict})

def strive(request): 
    data_dict={}
    query_data = Variables.objects.all().filter(key__startswith='strive')
    for data in query_data:
       data_dict[data.key]= data.value 
       
    return render(request, 'strive.html',{'page_data': data_dict})


def case_study_video_solutions(request): 
    return render(request, 'case_study_video_solutions.html',{})

def white_paper_broadcasting(request): 
    return render(request, 'white_paper_broadcasting.html',{})

#Response method for contact which will send mail.
def contact_response(request): 
    if request.method == 'POST': 
        form = ContactForm(request.POST) 
        if form.is_valid(): 
            try: 
                message = form.cleaned_data['message'] 
                phoneno = form.cleaned_data['phoneno']
                name = form.cleaned_data['name']
                company = form.cleaned_data['company']
                email =  form.cleaned_data['email'] 
                
                if name and not name.isspace():
                    emailmsg = "Name: " + name +"\n"
                if company and not company.isspace():
                    emailmsg += "Company: " + company + "\n" 
                if phoneno and not phoneno.isspace():
                    emailmsg += "Phone number: " + phoneno + "\n"
                if message and not message.isspace():
                    emailmsg += "Message: " + message + "\n"
                if email and not email.isspace():
                    emailmsg += "Email: " + email + "\n"
                    
                send_mail(
                    "Contact Us Email",
                    emailmsg,
                    email ,
                    [APP_CONTACTUS_EMAIL_ADDRESS],
                )
                
            except:
                return HttpResponseRedirect('/response-thanks/')
        
        
        #=======================================================================
        #Only for testing purpose for test cases
        #else:
        #     return render(request, "contactus.html", {'form': form}) 
        #=======================================================================
        
    
    return HttpResponseRedirect('/response-thanks/') 



#Thankyou template for contact and question  
def response_thanks(request):
    form=ContactForm()
    data_dict={}
    query_data = Variables.objects.all().filter(key__startswith='index')
    for data in query_data:
       data_dict[data.key]= data.value 
    return render(request, 'index.html',{'form':form,'index_data': data_dict})
