import { Injectable } from '@angular/core';
import { RELATIONS } from './relation.mock';
import { Relation } from './relation.model';

export interface RelationFilterCriteria {
    /** 1 ID pour filtrer sur un personnage, ou 2 IDs pour filtrer sur un duo précis */
    characterIds?: string[];
    /** Nombre minimum d'images dans imagePaths */
    minImages?: number;
    /** Nombre maximum d'images dans imagePaths */
    maxImages?: number;
    /** Note minimum (sur 10) */
    minNote?: number;
    /** Note maximum (sur 10) */
    maxNote?: number;
    /**
     * false (par défaut) : au moins une des 2 opinions respecte minNote / maxNote.
     * true : les 2 opinions doivent respecter minNote / maxNote.
     */
    matchAllOpinions?: boolean;
}

@Injectable({ providedIn: 'root' })
export class RelationsService {
    getAllRelation(): Relation[] {
        return RELATIONS;
    }

    /**
     * Filtre sur un personnage (1 ID) ou un duo exact de personnages (2 IDs).
     */
    filterByCharacters(characterIds: string[], relations: Relation[] = RELATIONS): Relation[] {
        const cleanedIds = characterIds
        .map((id) => id.trim())
        .filter((id) => id.length > 0);

        if (cleanedIds.length === 0) {
        return relations;
        }

        // Cas 1 : un seul personnage -> toute relation où il apparaît
        if (cleanedIds.length === 1) {
        const targetId = cleanedIds[0];
        return relations.filter((relation) => relation.characterIds.includes(targetId));
        }

        // Cas 2 : deux personnages ou plus -> relation contenant tous les IDs demandés (sans doublon)
        const uniqueTargetIds = Array.from(new Set(cleanedIds));
        return relations.filter((relation) => {
        if (uniqueTargetIds.length === 2 && relation.characterIds.length === 2) {
            return (
            uniqueTargetIds.every((id) => relation.characterIds.includes(id))
            );
        }
        return uniqueTargetIds.every((id) => relation.characterIds.includes(id));
        });
    }

    /**
     * Filtre selon le nombre d'images présentes dans `imagePaths`.
     */
    filterByImageCount(
        options: { min?: number; max?: number },
        relations: Relation[] = RELATIONS
    ): Relation[] {
        const { min, max } = options;

        return relations.filter((relation) => {
        const count = relation.imagePaths?.length ?? 0;

        if (min !== undefined && min !== null && count < min) {
            return false;
        }
        if (max !== undefined && max !== null && count > max) {
            return false;
        }
        return true;
        });
    }

    /**
     * Filtre selon une note minimum et/ou maximum (sur 10) dans `opinions`.
     */
    filterByNote(
        options: { minNote?: number; maxNote?: number; matchAllOpinions?: boolean },
        relations: Relation[] = RELATIONS
    ): Relation[] {
        const { minNote, maxNote, matchAllOpinions = false } = options;

        const hasMin = minNote !== undefined && minNote !== null;
        const hasMax = maxNote !== undefined && maxNote !== null;

        if (!hasMin && !hasMax) {
        return relations;
        }

        return relations.filter((relation) => {
        const notes = (relation.opinions ?? []).map((opinion) => opinion.note);
        if (notes.length === 0) {
            return false;
        }

        const checkNote = (note: number): boolean => {
            if (hasMin && note < minNote!) {
            return false;
            }
            if (hasMax && note > maxNote!) {
            return false;
            }
            return true;
        };

        return matchAllOpinions ? notes.every(checkNote) : notes.some(checkNote);
        });
    }

    /**
     * Combine tous les critères en un seul appel.
     */
    filterRelations(criteria: RelationFilterCriteria, relations: Relation[] = RELATIONS): Relation[] {
        let result = [...relations];

        if (criteria.characterIds?.length) {
        result = this.filterByCharacters(criteria.characterIds, result);
        }

        if (criteria.minImages !== undefined || criteria.maxImages !== undefined) {
        result = this.filterByImageCount(
            { min: criteria.minImages, max: criteria.maxImages },
            result
        );
        }

        if (criteria.minNote !== undefined || criteria.maxNote !== undefined) {
        result = this.filterByNote(
            {
            minNote: criteria.minNote,
            maxNote: criteria.maxNote,
            matchAllOpinions: criteria.matchAllOpinions,
            },
            result
        );
        }

        return result;
    }
}