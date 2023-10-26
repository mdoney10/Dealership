from django.db import models


class Salesperson(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    employee_id = models.CharField(max_length=100)

    def __str__(self):
        return self.last_name


class Customer(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    phone_number = models.PositiveIntegerField(null=True)

    def __str__(self):
        return self.first_name


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=100, unique=True)
    sold = models.BooleanField(default=False)
    import_href = models.CharField(max_length=300, unique=True, null=True)


class Sale (models.Model):

    automobile = models.ForeignKey(AutomobileVO, related_name="sales", on_delete=models.CASCADE)

    salesperson = models.ForeignKey(Salesperson, related_name="sales", on_delete=models.CASCADE)

    customer = models.ForeignKey(Customer, related_name="sales", on_delete=models.CASCADE)

    price = models.PositiveIntegerField(max_length=100)
