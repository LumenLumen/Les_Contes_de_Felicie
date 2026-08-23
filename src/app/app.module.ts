import { NgModule } from "@angular/core";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { CoreModule } from "./core/core.module";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [
    ],
    providers: [
        {
            provide: LocationStrategy, useClass: HashLocationStrategy
        }
    ],
    imports: [
        CoreModule,
        BrowserModule
    ],
})
export class AppModule {}
