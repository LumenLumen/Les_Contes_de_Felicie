import { Directive, OnInit, OnDestroy, inject, Renderer2 } from '@angular/core';

@Directive()
export abstract class BasePersonnageComponent implements OnInit, OnDestroy {
    protected renderer = inject(Renderer2);
    
    // Chaque personnage surcharge cette variable
    abstract themeColor: string;

    ngOnInit(): void {
        document.body.style.setProperty('--bg-color', this.themeColor);
    }

    ngOnDestroy(): void {
        // Restaure la couleur par défaut en quittant la page
        document.body.style.removeProperty('--bg-color');
    }
}