from common.json import ModelEncoder
from .models import AutomobileVO, Salesperson, Customer, Sale


class AutomobileVODetailEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "sold",
        "import_href",
    ]


class SalespersonListEncoder(ModelEncoder):
    model = Salesperson
    properties = [
        "first_name",
        "last_name",
        "employee_id",
        "id",
    ]


class CustomerListEncoder(ModelEncoder):
    model = Customer
    properties = [
        "first_name",
        "last_name",
        "address",
        "phone_number",
        "id",
    ]


class SaleListEncoder(ModelEncoder):
    model = Sale
    properties = [
        "price",
        "id",
    ]
    encoders = {
        "automobile": AutomobileVODetailEncoder(),
        "salesperson": SalespersonListEncoder(),
        "customer": CustomerListEncoder(),
    }

    def get_extra_data(self, o):
        return {
            "customer_first_name": o.customer.first_name,
            "customer_last_name": o.customer.last_name,
            "customer_address": o.customer.address,
            "customer_phone_number": o.customer.phone_number,
            "sales_person_first_name": o.salesperson.first_name,
            "salesperson_last_name": o.salesperson.last_name,
            "salesperson_employee_id": o.salesperson.employee_id,
            "vin": o.automobile.vin,
        }
