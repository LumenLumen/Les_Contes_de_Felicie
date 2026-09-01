import { Component } from '@angular/core';

@Component({
    selector: 'app-langtab',
    standalone: false,
    template: `
        <ul class="centre tab-nav">
        <li>
            <button type="button" class="bouton" [class.active]="currentLang === 'en'" (click)="selectLang('en')">English</button>
        </li>
        <li>
            <button type="button" class="bouton" [class.active]="currentLang === 'fr'" (click)="selectLang('fr')">Français</button>
        </li>
        </ul>

        @if (currentLang === 'en') {
        <div class="tab-pane fade active">
            <ng-content select="[lang-en]"></ng-content>
        </div>
        }

        @if (currentLang === 'fr') {
        <div class="tab-pane fade active">
            <ng-content select="[lang-fr]"></ng-content>
        </div>
        }
    `,
    styleUrl: './lang-tab.component.scss' 
})
export class LangTabComponent {
    currentLang: 'en' | 'fr' = 'fr';

    selectLang(lang: 'en' | 'fr'): void {
        this.currentLang = lang;
    }
} 