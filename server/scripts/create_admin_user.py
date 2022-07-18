#!/bin/bash
from django.contrib.auth.models import User

def run(*args):
    User.objects.create_superuser(
        username='admin', 
        password='admin', 
        email='admin@payscale.com'
    )

