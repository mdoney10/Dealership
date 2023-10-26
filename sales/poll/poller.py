import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "sales_project.settings")
django.setup()

# Import models from sales_rest, here.
from sales_rest.models import AutomobileVO


def get_autos():
    response = requests.get("http://inventory-api:8000/api/automobiles/")
    if response.status_code != 200:
        print(f"Unexpected status code: {response.status_code}")

    content = json.loads(response.content)

    try:

        for auto in content["autos"]:
            AutomobileVO.objects.update_or_create(
                import_href=auto["href"],
                defaults={
                    "vin": auto["vin"],
                    "sold": auto["sold"],
                },
            )

    except:
        print("Didnt work")


def poll(repeat=True):
    while True:
        print('Sales poller polling for data')
        try:
            get_autos()

        except Exception as e:
            print(e, file=sys.stderr)

        if (not repeat):
            break

        time.sleep(60)


if __name__ == "__main__":
    poll()
