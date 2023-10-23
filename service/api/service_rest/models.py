from django.db import models

# Create your models here.
class AutomobileVO(models.Model):
    vin = models.CharField(max_length=50, unique=True)
    sold = models.CharField(max_length=15)


class Technician(models.Model):
    first_name = models.CharField(max_length=25)
    last_name = models.CharField(max_length=25)
    employee_id = models.CharField(max_length=5)


class Appointmenet(models.Model):
    automobile_vin = models.CharField(max_length=50)
    customer = models.CharField(max_length=50)
    Appointment_date = models.DateField(blank=True)
    appointment_time = models.TimeField()
    technician = models.ForeignKey(
        Technician,
        related_name="appointment",
        on_delete=models.CASCADE
    )
    reason = models.CharField(max_length=50)
    status = models.CharField(max_length=50)
    vip = models.CharField(max_length=10)