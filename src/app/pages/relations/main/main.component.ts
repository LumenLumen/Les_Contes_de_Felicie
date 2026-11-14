import { Component, inject, OnInit } from '@angular/core';
import { Relation } from '../../../core/relations/relation.model';
import {
  RelationFilterCriteria,
  RelationsService,
} from '../../../core/relations/relations.service';

@Component({
  standalone: false,
  selector: 'app-main',
  styleUrl: './main.component.scss',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {
  private readonly relationsService = inject(RelationsService);

  allRelations: Relation[] = [];
  relations: Relation[] = [];

  // Liste dynamique des IDs de personnages présents dans les relations
  availableCharacters: string[] = [];

  // Critères du formulaire
  selectedChar1: string = '';
  selectedChar2: string = '';
  minImages: number | null = null;
  maxImages: number | null = null;
  minNote: number | null = null;
  maxNote: number | null = null;
  matchAllOpinions: boolean = false;

  ngOnInit(): void {
    this.allRelations = this.relationsService.getAllRelation();
    this.relations = [...this.allRelations];

    const charSet = new Set<string>();
    for (const rel of this.allRelations) {
      for (const charId of rel.characterIds ?? []) {
        if (charId) {
          charSet.add(charId);
        }
      }
      for (const op of rel.opinions ?? []) {
        if (op.authorId) charSet.add(op.authorId);
        if (op.targetId) charSet.add(op.targetId);
      }
    }
    this.availableCharacters = Array.from(charSet).sort((a, b) =>
      a.localeCompare(b)
    );
  }

  applyFilters(): void {
    // Évite de sélectionner deux fois le même personnage comme duo
    if (this.selectedChar1 && this.selectedChar1 === this.selectedChar2) {
      this.selectedChar2 = '';
    }

    const characterIds: string[] = [];
    if (this.selectedChar1) {
      characterIds.push(this.selectedChar1);
    }
    if (this.selectedChar2) {
      characterIds.push(this.selectedChar2);
    }

    const criteria: RelationFilterCriteria = {
      characterIds: characterIds.length > 0 ? characterIds : undefined,
      minImages:
        this.minImages !== null && this.minImages !== undefined && this.minImages >= 0
          ? Number(this.minImages)
          : undefined,
      maxImages:
        this.maxImages !== null && this.maxImages !== undefined && this.maxImages >= 0
          ? Number(this.maxImages)
          : undefined,
      minNote:
        this.minNote !== null && this.minNote !== undefined
          ? Math.max(0, Math.min(10, Number(this.minNote)))
          : undefined,
      maxNote:
        this.maxNote !== null && this.maxNote !== undefined
          ? Math.max(0, Math.min(10, Number(this.maxNote)))
          : undefined,
      matchAllOpinions: this.matchAllOpinions,
    };

    this.relations = this.relationsService.filterRelations(
      criteria,
      this.allRelations
    );
  }

  resetFilters(): void {
    this.selectedChar1 = '';
    this.selectedChar2 = '';
    this.minImages = null;
    this.maxImages = null;
    this.minNote = null;
    this.maxNote = null;
    this.matchAllOpinions = false;
    this.relations = [...this.allRelations];
  }
}