from django.urls import path
from .views import (
    api_list_technicians,
    api_technician_detail,
    api_list_appointments,
    api_appointment_detail,
    api_AutoVO,
    api_cancel_appointment,
    api_finish_appointment
)

urlpatterns = [
    path("technicians/", api_list_technicians, name="api_list_technicians"),
    path("technicians/<int:id>/", api_technician_detail, name="api_technician_detail"),
    path("appointments/<int:id>/cancel/", api_cancel_appointment, name="api_cancel_appointment"),
    path("appointments/<int:id>/finish/", api_finish_appointment, name="api_finish_appointment"),
    path("appointments/", api_list_appointments, name="api_list_appointments"),
    path("appointments/<int:id>/", api_appointment_detail, name="api_appointment_detail"),
    path("autovo/", api_AutoVO, name="api_AutoVO"),
]