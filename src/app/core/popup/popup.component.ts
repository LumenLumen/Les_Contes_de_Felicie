import { Component, Input, OnInit } from '@angular/core';
import { WARNS } from './warn.mock';
import { Warn } from './warn.model';

@Component({
  standalone: false,
  selector: 'app-popup',
  styleUrl: './popup.component.scss',
  templateUrl: './popup.component.html',
})
export class PopupComponent implements OnInit {
  // Liste des IDs d'avertissements passés en paramètre
  @Input() warningIds: number[] = [];

  // État d'affichage de la pop-up (affichée par défaut au chargement)
  isVisible: boolean = true;

  // Liste complète des avertissements disponibles
  allWarns: Warn[] = WARNS;

  // Avertissements filtrés à afficher dans la pop-up
  selectedWarns: Warn[] = [];

  ngOnInit(): void {
    // Filtrer les avertissements en fonction des IDs reçus en paramètre
    this.selectedWarns = this.allWarns.filter(warn => this.warningIds.includes(warn.id));
  }

  // Méthode de validation pour fermer la pop-up
  validate(): void {
    this.isVisible = false;
  }
}