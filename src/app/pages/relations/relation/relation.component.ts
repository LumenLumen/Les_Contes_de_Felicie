import { Component, Input, OnChanges } from '@angular/core';
import { Relation, RelationUnique } from '../../../core/relations/relation.model';

export type HeartVisualState =
  | 'broken-full' // Cœur brisé plein (notes 0..4)
  | 'intact-full' // Cœur entier plein (notes 6..10)
  | 'empty';      // Cœur non rempli

@Component({
  standalone: false,
  selector: 'app-relation',
  templateUrl: './relation.component.html',
  styleUrl: './relation.component.scss',
})
export class RelationComponent implements OnChanges {
  @Input({ required: true }) relation!: Relation;

  firstOpinion?: RelationUnique;
  secondOpinion?: RelationUnique;

  readonly heartSlots = [1, 2, 3, 4, 5];

  ngOnChanges(): void {
    this.firstOpinion = this.relation?.opinions?.[0];
    this.secondOpinion = this.relation?.opinions?.[1];
  }

  /**
   * Calcule l'état de chacun des 5 emplacements de cœurs pour une note de 0 à 10 :
   * - note < 5 : (5 - note) cœurs brisés pleins, le reste vide
   * - note === 5 : aucun cœur rempli (5 vides)
   * - note > 5 : (note - 5) cœurs entiers pleins, le reste vide
   */
  getHearts(note: number): HeartVisualState[] {
    const clampedNote = Math.max(0, Math.min(10, Math.round(Number(note) || 0)));

    if (clampedNote < 5) {
      const brokenFullCount = 5 - clampedNote;
      return this.heartSlots.map((_, index) =>
        index < brokenFullCount ? 'broken-full' : 'empty'
      );
    }

    if (clampedNote > 5) {
      const intactFullCount = clampedNote - 5;
      return this.heartSlots.map((_, index) =>
        index < intactFullCount ? 'intact-full' : 'empty'
      );
    }

    return this.heartSlots.map(() => 'empty');
  }

  /**
   * Détermine si le cœur utilise le tracé brisé (notes < 5) ou entier (notes >= 5).
   */
  isBrokenHeart(note: number): boolean {
    const clampedNote = Math.max(0, Math.min(10, Math.round(Number(note) || 0)));
    return clampedNote < 5;
  }
}