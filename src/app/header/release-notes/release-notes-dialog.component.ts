import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {Release} from '../../model/release';

@Component({
  selector: 'app-release-notes',
  imports: [MatDialogModule],
  templateUrl: './release-notes-dialog.component.html',
  styleUrl: './release-notes-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReleaseNotesDialogComponent {
  dialogRef = inject(MatDialogRef<ReleaseNotesDialogComponent>);
  releases = inject<Release[]>(MAT_DIALOG_DATA);

  close() {
    this.dialogRef.close();
  }
}
