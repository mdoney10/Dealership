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
        try:
            appointments = Appointment.objects.all()
            return JsonResponse(
                {"appointments": appointments},
                encoder=AppointmentListEncoder,
                safe=False,
            )
        except Exception as e:
            return JsonResponse(
                {"error": f"Could not retrieve appointments. Error: {str(e)}"},
                status=500
            )
    elif request.method == "POST":
        try:
            content = json.loads(request.body)
            technician_id = content["technician"]
            technician = Technician.objects.get(id=technician_id)
            content["technician"] = technician
            appointment = Appointment.objects.create(**content)
            return JsonResponse(
                {"message": "Appointment created successfully", "appointment": appointment},
                encoder=AppointmentListEncoder,
                status=201
            )
        except KeyError as ke:
            return JsonResponse(
                {"error": f"Invalid JSON payload. Missing required field(s). {str(ke)}"},
                status=400
            )
        except Technician.DoesNotExist:
            return JsonResponse(
                {"error": "Technician with the specified ID does not exist."},
                status=404
            )
        except Exception as e:
            return JsonResponse(
                {"error": f"Could not create the appointment. Error: {str(e)}"},
                status=400
            )


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


@require_http_methods(["PUT"])
def api_cancel_appointment(request, id):
    try:
        appointment = Appointment.objects.get(id=id)
        appointment.status = "canceled"
        appointment.save()
        return JsonResponse({"message": "Appointment canceled successfully"})
    except Appointment.DoesNotExist:
        return JsonResponse({"error": "Appointment not found"}, status=404)


@require_http_methods(["PUT"])
def api_finish_appointment(request, id):
    try:
        appointment = Appointment.objects.get(id=id)
        appointment.status = "finished"
        appointment.save()
        return JsonResponse({"message": "Appointment finished successfully"})
    except Appointment.DoesNotExist:
        response = JsonResponse(
            {"error": "Appointment with the specified ID does not exist"},
            status=404
        )
        return response

    except Exception as e:
        response = JsonResponse(
            {"error": f"Could not finish the appointment. Error: {str(e)}"},
            status=400
        )
        return response
