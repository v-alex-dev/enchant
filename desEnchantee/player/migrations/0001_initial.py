# Generated by Django 4.2 on 2023-04-17 21:06

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Player',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstName', models.CharField(max_length=150)),
                ('lastName', models.CharField(max_length=150)),
                ('world', models.CharField(max_length=50)),
            ],
        ),
    ]