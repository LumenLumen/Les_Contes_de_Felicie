import { Component } from '@angular/core';
import { BasePersonnageComponent } from '../personnage.component';

@Component({
  standalone : false,
  selector: 'app-verveine',
  styleUrl: './verveine.component.scss',
  templateUrl: './verveine.component.html',
})
export class VerveineComponent extends BasePersonnageComponent{
  themeColor = '#91ba82';
}
