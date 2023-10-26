from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from .models import Salesperson, Sale, Customer, AutomobileVO
from .encoders import (
    SaleListEncoder,
    SalespersonListEncoder,
    CustomerListEncoder,
)


@require_http_methods(["GET", "POST"])
def list_salespeople(request):
    if request.method == "GET":
        salespeople = Salesperson.objects.all()
        return JsonResponse(
            {"salespeople": salespeople},
            encoder=SalespersonListEncoder,
        )
    else:
        content = json.loads(request.body)

        salespeople = Salesperson.objects.create(**content)
        return JsonResponse(
            salespeople,
            encoder=SalespersonListEncoder,
            safe=False,
        )


@require_http_methods(["DELETE"])
def delete_salespeople(request, pk):
    if request.method == "DELETE":
        count, _ = Salesperson.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def list_customers(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder=CustomerListEncoder,
        )
    else:
        content = json.loads(request.body)

        customer = Customer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder=CustomerListEncoder,
            safe=False,
        )


@require_http_methods(["DELETE"])
def delete_customer(request, pk):
    if request.method == "DELETE":
        count, _ = Customer.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def list_sales(request, automobile_vo_id=None):
    if request.method == "GET":
        if automobile_vo_id is not None:
            sales = Sale.objects.filter(automobile=automobile_vo_id)
        else:
            sales = Sale.objects.all()
        return JsonResponse(
            {"sales": sales},
            encoder=SaleListEncoder,
        )
    else:
        content = json.loads(request.body)

        automobile_href = content["automobile"]
        automobile = AutomobileVO.objects.get(import_href=automobile_href)
        content["automobile"] = automobile

        salesperson_id = content["salesperson"]
        salesperson = Salesperson.objects.get(id=salesperson_id)
        content["salesperson"] = salesperson

        customer_id = content["customer"]
        customer = Customer.objects.get(id=customer_id)
        content["customer"] = customer

        sale = Sale.objects.create(**content)
        return JsonResponse(
            sale,
            encoder=SaleListEncoder,
            safe=False,
        )


@require_http_methods(["DELETE"])
def delete_sale(request, pk):
    if request.method == "DELETE":
        count, _ = Sale.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})
