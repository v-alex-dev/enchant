# Generated by Django 4.2 on 2023-04-17 21:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('party', '0001_initial'),
        ('player', '0001_initial'),
        ('enchantement', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Game',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('enchantement_FK', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='enchantement.enchantement')),
                ('party_FK', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='party.party')),
                ('player_FK', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='player.player')),
            ],
        ),
    ]
