from django.shortcuts import render
# from django.core import serializers
import requests
import json

SSR_URL = "http://localhost:8081/render"


# Create your views here.
def index(request):
  path = request.path
  post_data = {'name': 'Adi Luhung Suryadi'}
  req = requests.post(SSR_URL, json=dict(path=path, post_data=post_data))
  context = {
    'serialized_value': json.dumps(post_data),
    'rendered': req.text,
  }
  return render(request, 'index.html', context)
