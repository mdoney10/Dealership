from django.urls import path
from .views import (
    api_list_technicians,
    api_technician_detail,
    api_list_appointments,
    api_appointment_detail,
    api_AutoVO,
)

urlpatterns = [
    path("technicians/", api_list_technicians, name="api_list_technicians"),
    path("technicians/<int:id>/", api_technician_detail, name="api_technician_detail"),
    path("appointments/", api_list_appointments, name="api_list_appointments"),
    path("appointments/<int:id>/", api_appointment_detail, name="api_appointment_detail"),
    path("autovo/", api_AutoVO, name="api_AutoVO"),

]

