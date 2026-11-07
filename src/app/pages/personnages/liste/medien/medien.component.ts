import { Component } from '@angular/core';
import { BasePersonnageComponent } from '../personnage.component';

@Component({
  standalone: false,
  selector: 'app-medien',
  styleUrl: './medien.component.scss',
  templateUrl: './medien.component.html',
})
export class MedienComponent extends BasePersonnageComponent{
  themeColor = '#f3c992';
}
