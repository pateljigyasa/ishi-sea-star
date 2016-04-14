"""Seastar Forms"""

from django import forms 
#Contact form for contact us page
class ContactForm(forms.Form): 
        """fields = ('name', 'email','phoneno','company','message')
        widgets = {
            'name': forms.TextInput(attrs={'class':'form-control','required':'true'}),
            'email' : forms.EmailInput(attrs={'class':'form-control','required':'true'}),
            'phoneno' : forms.TextInput(attrs={'class':'form-control'}),
            'company' : forms.TextInput(attrs={'class':'form-control'}), 
            'message' : forms.Textarea(attrs={'class':'form-control','required':'true','rows':'5'})
        }"""
        #name = forms.TextInput(attrs={'required': True,'class':'form-control'} )
        name = forms.CharField(required=True,widget=forms.TextInput(attrs={'class':'form-control','required':True}))
        email = forms.CharField(widget=forms.EmailInput(attrs={'class':'form-control','required':True}))
        phoneno = forms.CharField(widget=forms.TextInput(attrs={'class':'form-control'}),required=False)
        company = forms.CharField(widget=forms.TextInput(attrs={'class':'form-control'}),required=False)
        message = forms.CharField(widget=forms.Textarea(attrs={'class':'form-control','required':True,'rows':'8'}))

class ApplyForm(forms.Form): 
        """fields = ('name', 'email','phoneno','company','message')
        widgets = {
            'name': forms.TextInput(attrs={'class':'form-control','required':'true'}),
            'email' : forms.EmailInput(attrs={'class':'form-control','required':'true'}),
            'phoneno' : forms.TextInput(attrs={'class':'form-control'}),
            'company' : forms.TextInput(attrs={'class':'form-control'}), 
            'message' : forms.Textarea(attrs={'class':'form-control','required':'true','rows':'5'})
        }"""
        #name = forms.TextInput(attrs={'required': True,'class':'form-control'} )
        name = forms.CharField(required=True,widget=forms.TextInput(attrs={'class':'form-control','required':True}))
        email = forms.CharField(widget=forms.EmailInput(attrs={'class':'form-control','required':True}))
        phoneno = forms.CharField(widget=forms.TextInput(attrs={'class':'form-control'}),required=False)
        linkedinprofile = forms.CharField(widget=forms.TextInput(attrs={'class':'form-control'}),required=False)
        message = forms.CharField(widget=forms.Textarea(attrs={'class':'form-control','required':True,'rows':'8'}))