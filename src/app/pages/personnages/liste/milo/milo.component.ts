import { Component } from '@angular/core';
import { BasePersonnageComponent } from '../personnage.component';

@Component({
  standalone: false,
  selector: 'app-milo',
  styleUrl: './milo.component.scss',
  templateUrl: './milo.component.html',
})
export class MiloComponent extends BasePersonnageComponent {
  themeColor = '#f3c874';
}
