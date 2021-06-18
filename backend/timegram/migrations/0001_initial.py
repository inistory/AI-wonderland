# Generated by Django 3.2.3 on 2021-06-02 06:42

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Timegram',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('dt_created', models.DateTimeField(auto_now_add=True, verbose_name='Date Created')),
                ('dt_modified', models.DateTimeField(auto_now=True, verbose_name='Date Modified')),
                ('total_like', models.IntegerField(default=0)),
                ('p_no1', models.CharField(blank=True, max_length=20)),
                ('p_no2', models.CharField(blank=True, max_length=20)),
                ('p_no3', models.CharField(blank=True, max_length=20)),
                ('p_no4', models.CharField(blank=True, max_length=20)),
                ('p_no5', models.CharField(blank=True, max_length=20)),
                ('p_no6', models.CharField(blank=True, max_length=20)),
                ('total_price', models.IntegerField(default=0)),
                ('mem', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='회원 ID')),
            ],
        ),
        migrations.CreateModel(
            name='Like',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('flag', models.BooleanField(default=True)),
                ('mem', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='회원 ID')),
                ('timegram', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='timegram.timegram', verbose_name='타임그램 ID')),
            ],
        ),
    ]
