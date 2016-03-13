from django.shortcuts import render
from seastar.forms import ContactForm 
from django.http import HttpResponseRedirect
from django.core.mail import send_mail
from django.forms.forms import Form 
from seastarapp.settings import APP_CONTACTUS_EMAIL_ADDRESS
# Create your views here.
#Index view 
def index(request): 
    form=ContactForm()
    return render(request, 'index.html',{'form':form})

def security(request): 
    return render(request, 'security.html')

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
    return render(request, 'index.html', {'form':form})
