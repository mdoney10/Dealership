from django.urls import path
from .views import (
    list_customers,
    delete_customer,
    list_sales,
    delete_sale,
    list_salespeople,
    delete_salespeople,
)

urlpatterns = [
    path("salespeople/", list_salespeople, name="list_salespeople"),
    path("salespeople/<int:pk>/", delete_salespeople, name="delete_salespeople"),
    path("customers/", list_customers, name="list_customers"),
    path("customers/<int:id>/", delete_customer, name="delete_customer"),
    path("sales/", list_sales, name="list_sales"),
    path("sales/<int:pk>/", delete_sale, name="delete_sale"),
]
