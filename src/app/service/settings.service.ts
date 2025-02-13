import {effect, Injectable, signal, Signal, WritableSignal} from '@angular/core';
import {WebStorageService} from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  //Private mutable signals
  private _craftResourceModifier: WritableSignal<number>;
  private _expensiveEndgameRecipes: WritableSignal<boolean>;

  //Exposed readonly signals
  readonly craftResourceModifier: Signal<number>;
  readonly expensiveEndgameRecipes: Signal<boolean>;

  constructor(storageService: WebStorageService) {
    this._craftResourceModifier = signal(storageService.getCraftResourceModifier());
    this._expensiveEndgameRecipes = signal(storageService.getExpensiveEndgameRecipes());

    this.craftResourceModifier = this._craftResourceModifier.asReadonly();
    this.expensiveEndgameRecipes = this._expensiveEndgameRecipes.asReadonly();

    effect(() => {
      storageService.saveCraftResourceModifier(this._craftResourceModifier());
      storageService.saveExpensiveEndgameRecipes(this._expensiveEndgameRecipes());
    });
  }

  setCraftResourceModifier(value: number) {
    this._craftResourceModifier.set(value);
  }

  toggleExpensiveEndgameRecipes() {
    this._expensiveEndgameRecipes.update(value => !value);
  }
}
