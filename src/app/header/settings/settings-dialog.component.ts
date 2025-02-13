import {ChangeDetectionStrategy, Component, inject, Signal} from '@angular/core';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {SettingsService} from '../../service/settings.service';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

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


  constructor(private settingsService: SettingsService) {
    this.craftResourceModifier = settingsService.craftResourceModifier;
    this.expensiveEndgameRecipes = settingsService.expensiveEndgameRecipes;
  }

  close() {
    this.dialogRef.close();
  }

  changeCraftResourceModifier(value: string) {
    try {
      const newValue = Number.parseFloat(value);
      this.settingsService.setCraftResourceModifier(newValue);
    } catch {
      window.alert('Incorrect value for modifier. Please use a number.');
    }
  }

  toggleExpensiveEndgameRecipes() {
    this.settingsService.toggleExpensiveEndgameRecipes();
  }
}
