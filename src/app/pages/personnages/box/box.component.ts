import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router'; // <-- Importer RouterLink

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [RouterLink], // <-- Ajouter RouterLink ici
  templateUrl: './box.component.html',
  styleUrl: './box.component.scss'
})

export class BoxComponent {
  @Input() perso!: string;
  @Input() img!: string;
}