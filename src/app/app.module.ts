import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {SkillsComponent} from './skills/skills.component';
import {IngredientsComponent} from './ingredients/ingredients.component';
import {OutputsComponent} from './outputs/outputs.component';
import {HttpClientModule} from '@angular/common/http';
import {CraftingParentComponent} from './crafting-parent/crafting-parent.component';
import {ReleaseNotesComponent} from './release-notes/release-notes.component';
import {RecipeModalComponent} from './recipe-modal/recipe-modal.component';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {NgOptimizedImage} from '@angular/common';
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SkillsComponent,
    IngredientsComponent,
    OutputsComponent,
    CraftingParentComponent,
    ReleaseNotesComponent,
    RecipeModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    ClipboardModule,
    NgOptimizedImage,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
