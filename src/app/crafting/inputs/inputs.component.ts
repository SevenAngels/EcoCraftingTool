import {ChangeDetectionStrategy, Component, Signal} from '@angular/core';
import {Item} from '../../model/item';
import {CraftingService} from '../../service/crafting.service';
import {ImageService} from '../../service/image.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTooltip} from '@angular/material/tooltip';

@Component({
  selector: 'app-inputs',
  imports: [MatFormFieldModule, MatInputModule, MatTooltip],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputsComponent {
  pricePerThousandCals: Signal<number>;
  defaultProfitPercent: Signal<number>;

  selectedItems: Signal<Item[]>;
  selectedByproducts: Signal<Item[]>;

  constructor(private craftingService: CraftingService, protected imageService: ImageService) {
    this.pricePerThousandCals = craftingService.pricePerThousandCals;
    this.defaultProfitPercent = craftingService.defaultProfitPercent;

    this.selectedItems = craftingService.selectedInputs;
    this.selectedByproducts = craftingService.selectedByproducts;


  }

  onCalorieCostChange(value: string) {
    const number = Number.parseFloat(value);

    this.craftingService.updatePricePerThousandCals(number);
  }

  onProfitPercentChange(value: string) {
    const number = Number.parseFloat(value);

    this.craftingService.updateDefaultProfitPercent(number);
  }

  onPriceChange(index: number, value: string) {
    const number = Number.parseFloat(value);

    this.craftingService.updateInputPrice(index, number);
  }
}
