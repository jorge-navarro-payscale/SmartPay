from rest_framework import routers
from django.urls import include, path
from django.contrib.auth.views import LogoutView
from api.views import UserViewSet

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path(
        'api-auth/',
        include(
            'rest_framework.urls',
            namespace='rest_framework'))
]
