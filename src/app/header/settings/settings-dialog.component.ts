import {ChangeDetectionStrategy, Component, inject, Signal} from '@angular/core';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {CraftingService} from '../../service/crafting.service';

@Component({
  selector: 'app-settings',
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule
  ],
  templateUrl: './settings-dialog.component.html',
  styleUrl: './settings-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsDialogComponent {
  dialogRef = inject(MatDialogRef<SettingsDialogComponent>);
  craftResourceModifier: Signal<number>;
  expensiveEndgameRecipes: Signal<boolean>;


  constructor(private craftingService: CraftingService) {
    this.craftResourceModifier = craftingService.craftResourceModifier;
    this.expensiveEndgameRecipes = craftingService.expensiveEndgameRecipes;
  }

  close() {
    this.dialogRef.close();
  }

  changeCraftResourceModifier(value: string) {
    try {
      const newValue = Number.parseFloat(value);
      this.craftingService.setCraftResourceModifier(newValue);
    } catch {
      window.alert('Incorrect value for modifier. Please use a number.');
    }
  }

  toggleExpensiveEndgameRecipes() {
    this.craftingService.toggleExpensiveEndgameRecipes();
  }
}
