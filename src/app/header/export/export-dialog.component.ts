import {ChangeDetectionStrategy, Component, inject, Signal} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {CdkCopyToClipboard} from '@angular/cdk/clipboard';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-export',
  imports: [MatButtonModule, MatDialogModule, CdkCopyToClipboard],
  templateUrl: './export-dialog.component.html',
  styleUrl: './export-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExportDialogComponent {
  private dialogRef = inject(MatDialogRef<ExportDialogComponent>);
  private snackBar = inject(MatSnackBar);
  exportJson = inject<Signal<string>>(MAT_DIALOG_DATA);

  close() {
    this.dialogRef.close();
  }

  selectAllText(exportBox: HTMLTextAreaElement) {
    exportBox.setSelectionRange(0, exportBox.value.length);
  }

  onCopy() {
    this.snackBar.open('Copied to clipboard', 'OK', {duration: 2000});
    this.dialogRef.close();
  }
}
