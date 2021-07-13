from django.db import models

# Create your models here.


class Product(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    model = models.CharField(max_length=50)
    image = models.TextField()
    amount = models.IntegerField()

    def __str__(self):
        return self.name
