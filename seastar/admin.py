from django.contrib import admin

# Register your models here.
 

from .models import Variables


class VariablesAdmin(admin.ModelAdmin):
    fieldsets = (
        ('', {
            'fields': ('key','value'),
        }),
       
        
    )
    list_display = ('key', 'value','created_when','modified_when')
    list_filter = ['key','created_when','modified_when']
    search_fields = ['key','id',]
    change_list_template = "admin/change_list_filter_sidebar.html"
    
 
admin.site.register(Variables,VariablesAdmin)
 
 