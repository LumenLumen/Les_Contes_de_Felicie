import { Component } from '@angular/core';
import { BasePersonnageComponent } from '../personnage.component';

@Component({
  standalone: false,
  selector: 'app-grimgrim',
  styleUrl: './grimgrim.component.scss',
  templateUrl: './grimgrim.component.html',
})
export class GrimgrimComponent extends BasePersonnageComponent {
  themeColor = '#8db680';
}