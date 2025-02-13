import {Inject, Injectable} from '@angular/core';
import {CalculatorConfig} from '../model/storage-model/calculator-config';
import {LocaleService} from './locale.service';
import {LOCAL_STORAGE, StorageService} from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class WebStorageService {

  constructor(@Inject(LOCAL_STORAGE) private storageService: StorageService, private localeService: LocaleService) {
  }

  getCalcConfig(): CalculatorConfig {
    let expensiveEndgame = this.storageService.get('expensiveEndgameCost');
    let multiplier = this.storageService.get('resourceCostMultiplier');
    let laborCost = this.storageService.get('laborCost');
    let profit = this.storageService.get('profitPercent');

    return {
      expensiveEndgameCost: expensiveEndgame === 'true',
      resourceCostMultiplier: multiplier != null ? Number.parseFloat(multiplier) : 1,
      laborCost: laborCost != null ? Number.parseFloat(laborCost) : 0,
      profitPercent: profit != null ? Number.parseFloat(profit) : 0,
      skills: this.storageService.get('skills'),
      tables: this.storageService.get('tables'),
      ingredients: this.storageService.get('ingredients'),
      outputs: this.storageService.get('recipes'),
    };
  }

  saveCalcConfig(calcConfig: CalculatorConfig) {
    this.storageService.set('expensiveEndgameCost', '' + calcConfig.expensiveEndgameCost);
    this.storageService.set('resourceCostMultiplier', calcConfig.resourceCostMultiplier);
    this.storageService.set('laborCost', calcConfig.laborCost.toLocaleString(
      this.localeService.selectedLocale().code, {minimumFractionDigits: 0, maximumFractionDigits: 2}));
    this.storageService.set('profitPercent', calcConfig.profitPercent.toLocaleString(
      this.localeService.selectedLocale().code, {minimumFractionDigits: 0, maximumFractionDigits: 2}));

    this.storageService.set('skills', calcConfig.skills);
    this.storageService.set('tables', calcConfig.tables);
    this.storageService.set('ingredients', calcConfig.ingredients);
    this.storageService.set('recipes', calcConfig.outputs);
  }

  getCraftResourceModifier(): number {
    const multiplier = this.storageService.get('resourceCostMultiplier');
    return multiplier != null ? Number.parseFloat(multiplier) : 1;
  }

  saveCraftResourceModifier(modifier: number) {
    this.storageService.set('resourceCostMultiplier', '' + modifier);
  }

  getExpensiveEndgameRecipes(): boolean {
    return this.storageService.get('expensiveEndgameCost') === 'true';
  }

  saveExpensiveEndgameRecipes(expensiveEndgame: boolean) {
    this.storageService.set('expensiveEndgameCost', '' + expensiveEndgame);
  }
}
