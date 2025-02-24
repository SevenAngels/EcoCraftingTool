import {ChangeDetectionStrategy, Component, Signal} from '@angular/core';
import {Recipe} from '../../model/recipe';
import {CraftingService} from '../../service/crafting.service';

@Component({
  selector: 'app-outputs',
  imports: [],
  templateUrl: './outputs.component.html',
  styleUrl: './outputs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OutputsComponent {

  selectedRecipes: Signal<Recipe[]>;

  constructor(craftingService: CraftingService) {
    this.selectedRecipes = craftingService.selectedRecipes;
  }
}
