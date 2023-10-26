from common.json import ModelEncoder
from .models import AutomobileVO, Technician, Appointment
from datetime import date, time


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

    def default(self, obj):
        if isinstance(obj, date):
            return obj.strftime('%Y-%m-%d')
        elif isinstance(obj, time):
            return obj.strftime('%H:%M:%S')
        return super().default(obj)


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

