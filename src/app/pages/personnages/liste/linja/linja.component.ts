import { Component } from '@angular/core';
import { BasePersonnageComponent } from '../personnage.component';

@Component({
  standalone: false,
  selector: 'app-linja',
  styleUrl: './linja.component.scss',
  templateUrl: './linja.component.html',
})
export class LinjaComponent extends BasePersonnageComponent{
  themeColor = '#cdc6b7';
}
