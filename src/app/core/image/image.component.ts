import { Component, Input, OnInit } from '@angular/core';
import { ARTISTS } from './artist-mock'; // Adapte le chemin si besoin

@Component({
  selector: 'app-image',
  styleUrl: './image.component.scss',
  templateUrl: './image.component.html',
  standalone: false,
})
export class ImageComponent implements OnInit {

  @Input() img !: String ;
  @Input() alt !: String ;
  @Input() artist !: String ;
  @Input() spoiler: boolean = false; // Désactivé par défaut
  
  isRevealed: boolean = false;
  lien = "";

  ngOnInit(): void {
    if (this.artist) {
      this.lien = this.getArtistLink(this.artist);
    }
  }

  revealSpoiler(): void {
    if (this.spoiler) {
      this.isRevealed = true;
    }
  }

  getArtistLink(name: String): string {
    const found = ARTISTS.find(a => a.nom.toLowerCase() === name.toLowerCase());
    return found ? found.lien : '';
  }
}