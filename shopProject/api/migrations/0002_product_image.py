# Generated by Django 2.2.14 on 2021-07-07 22:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='image',
            field=models.CharField(default='default', max_length=255),
            preserve_default=False,
        ),
    ]
