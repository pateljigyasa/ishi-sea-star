""" SeaStar website models"""
from django.db import models
from datetime import datetime  
from django.db.models.fields.related import ForeignKey
from django.contrib.admin.utils import help_text_for_field

# Create your models here. 
#Variables Table Model  
class Variables(models.Model):
    id = models.AutoField(primary_key=True)
    key = models.CharField(db_index=True,max_length=255,help_text="key by which text will be displayed on UI") 
    value = models.TextField(help_text="Text that will be displayed on UI")
    created_when = models.DateTimeField(auto_now_add=True)
    modified_when = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.key  

    class Meta:
        verbose_name_plural = "variables"
    