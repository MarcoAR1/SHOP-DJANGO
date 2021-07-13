
from django.urls import path, include
from .views import ProductViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('api/product', ProductViewSet, basename='api/product')

urlpatterns = [
    path('', include(router.urls))
]
