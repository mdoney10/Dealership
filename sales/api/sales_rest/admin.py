from django.contrib import admin
from .models import Sale, Salesperson, Customer, AutomobileVO

# Register your models here.


@admin.register(Salesperson)
class SalespersonAdmin(admin.ModelAdmin):
    pass


@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    pass


@admin.register(Sale)
class Sale(admin.ModelAdmin):
    pass


@admin.register(AutomobileVO)
class AutomobileVo(admin.ModelAdmin):
    pass
