from common.json import ModelEncoder
from .models import AutomobileVO, Technician, Appointment

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "sold"
    ]


class TechnicianListEncoder(ModelEncoder):
    model = Technician
    properties = [
        "id",
        "first_name",
        "last_name",
        "employee_id",
    ]


class TechnicianDetailEncoder(ModelEncoder):
    model = Technician
    properties = [
        "id",
        "first_name",
        "last_name",
        "employee_id",
    ]


class AppointmentListEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "id",
        "automobile_vin",
        "customer",
        "appointment_date",
        "appointment_time",
        "technician",
        "reason",
        "status",
        "vip",
    ]
    encoders = {
        "technician": TechnicianDetailEncoder(),
    }


class AppointmentDetailEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "automobile_vin",
        "customer",
        "appointment_date",
        "appointment_time",
        "technician",
        "reason",
        "status",
        "vip",
    ]
    encoders = {
        "technician": TechnicianDetailEncoder(),
    }

