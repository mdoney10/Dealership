from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from .models import Technician, Appointment, AutomobileVO
from .encoder import (
    AutomobileVOEncoder,
    TechnicianListEncoder,
    TechnicianDetailEncoder,
    AppointmentListEncoder,
    AppointmentDetailEncoder,
)
import json
from django.http import JsonResponse


@require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianListEncoder
        )
    else:
        try:
            content = json.loads(request.body)
            technician = Technician.objects.create(**content)
            return JsonResponse(
                technician,
                encoder=TechnicianListEncoder,
                safe=False,
            )
        except Technician.DoesNotExist:
            response = JsonResponse
            ({"message": "Could not create the technician"})
            response.status_code = 400
            return response


@require_http_methods({"GET", "DELETE"})
def api_technician_detail(request, id):
    if request.method == "GET":
        technician = Technician.objects.get(id=id)
        return JsonResponse(
            technician,
            encoder=TechnicianDetailEncoder,
            safe=False,
        )
    elif request.method == "DELETE":
        count, _ = Technician.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})
    else:
        content = json.loads(request.body)
        if content["id"] != id:
            return JsonResponse(
                {"error": "ID mismatch"},
                status=400,
            )

@require_http_methods(["GET", "POST"])
def api_list_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentListEncoder,
            safe=False,
        )
    else:
        try:
            content = json.loads(request.body)
            employee_id = content["technician"]
            technician = Technician.objects.get(employee_id=employee_id)
            content["technician"] = technician
            appointments = Appointment.objects.create(**content)
            return JsonResponse(
                appointments,
                encoder=AppointmentListEncoder,
                safe=False,
            )
        except Appointment.DoesNotExist:
            response = JsonResponse
            ({"message": "Could not create the appointment"})
            response.status_code = 400
            return response


@require_http_methods(["GET", "PUT", "DELETE"])
def api_appointment_detail(request, id):
    if request.method == "GET":
        appointment = Appointment.objects.get(id=id)
        return JsonResponse(
            appointment,
            encoder=AppointmentDetailEncoder,
            safe=False,
        )
    elif request.method == "DELETE":
        count, _ = Appointment.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})
    else:
        content = json.loads(request.body)
        Appointment.objects.filter(id=id).update(**content)
        appointment = Appointment.objects.get(id=id)
        return JsonResponse(
            appointment,
            encoder=AppointmentDetailEncoder,
            safe=False,
        )


@require_http_methods({"GET"})
def api_AutoVO(request):
    if request.method == "GET":
        autos = AutomobileVO.objects.all()
        return JsonResponse({"autos": autos}, encoder=AutomobileVOEncoder)