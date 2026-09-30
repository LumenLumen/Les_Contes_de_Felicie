import { Component } from '@angular/core';
import { BasePersonnageComponent } from '../personnage.component';

@Component({
  standalone: false,
  selector: 'app-lueur',
  styleUrl: './lueur.component.scss',
  templateUrl: './lueur.component.html',
})
export class LueurComponent extends BasePersonnageComponent{
  themeColor = '#ffc178';
}
