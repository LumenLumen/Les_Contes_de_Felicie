import { Component, Input } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-encadre',
  styleUrl: './encadre.component.scss',
  templateUrl: './encadre.component.html',
})
export class EncadreComponent {

  @Input() age !: string;
  @Input() size !: string;
  @Input() desc !: string;
}
