import { Component, Input } from '@angular/core';
import { ARTISTS } from './artist-mock';

@Component({
  selector: 'app-image',
  styleUrl: './image.component.scss',
  templateUrl: './image.component.html',
  standalone: false,
})
export class ImageComponent {

  @Input() img !: String ;
  @Input() alt !: String ;
  @Input() artist !: String ;
  lien = "";

  ngOnInit(): void {
    if (this.artist) {
      this.lien = this.getArtistLink(this.artist);
    }
  }

  /**
   * Recherche un artiste par son nom et retourne son lien.
   * Retourne une chaîne vide si l'artiste n'est pas trouvé.
   */
  getArtistLink(name: String): string {
    const found = ARTISTS.find(a => a.nom.toLowerCase() === name.toLowerCase());
    return found ? found.lien : '';
  }
}
