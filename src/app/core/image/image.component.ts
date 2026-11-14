import { Component, Input, OnInit } from '@angular/core';
import { ARTISTS } from './artist-mock'; // Adapte le chemin si besoin

@Component({
  selector: 'app-image',
  styleUrl: './image.component.scss',
  templateUrl: './image.component.html',
  standalone: false,
})
export class ImageComponent implements OnInit {

  @Input() img!: string;
  @Input() alt!: string;
  @Input() artist!: string;
  @Input() spoiler: boolean = false; // Désactivé par défaut

  // Dimensions optionnelles : acceptent un nombre (ex: 200 -> 200px) ou une chaîne CSS (ex: '200px', '50%', 'auto')
  @Input() width?: number | string;
  @Input() height?: number | string;

  isRevealed: boolean = false;
  lien = '';

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

  getArtistLink(name: string): string {
    const found = ARTISTS.find(a => a.nom.toLowerCase() === name.toLowerCase());
    return found ? found.lien : '';
  }

  get formattedWidth(): string | null {
    return this.normalizeSize(this.width);
  }

  get formattedHeight(): string | null {
    return this.normalizeSize(this.height);
  }

  private normalizeSize(value?: number | string): string | null {
    if (value === undefined || value === null || value === '') {
      return null;
    }
    if (typeof value === 'number') {
      return `${value}px`;
    }
    const trimmed = value.trim();
    return /^\d+(\.\d+)?$/.test(trimmed) ? `${trimmed}px` : trimmed;
  }
}