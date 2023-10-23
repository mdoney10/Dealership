# Generated by Django 4.0.3 on 2023-10-23 18:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AutomobileVO',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('vin', models.CharField(max_length=50, unique=True)),
                ('sold', models.CharField(max_length=15)),
            ],
        ),
        migrations.CreateModel(
            name='Technician',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=25)),
                ('last_name', models.CharField(max_length=25)),
                ('employee_id', models.CharField(max_length=5)),
            ],
        ),
        migrations.CreateModel(
            name='Appointmenet',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('automobile_vin', models.CharField(max_length=50)),
                ('customer', models.CharField(max_length=50)),
                ('Appointment_date', models.DateField(blank=True)),
                ('appointment_time', models.TimeField()),
                ('reason', models.CharField(max_length=50)),
                ('status', models.CharField(max_length=50)),
                ('vip', models.CharField(max_length=10)),
                ('technician', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='appointment', to='service_rest.technician')),
            ],
        ),
    ]
