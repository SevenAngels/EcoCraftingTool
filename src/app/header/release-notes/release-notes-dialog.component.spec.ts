import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ReleaseNotesDialogComponent} from './release-notes-dialog.component';

describe('ReleaseNotesComponent', () => {
  let component: ReleaseNotesDialogComponent;
  let fixture: ComponentFixture<ReleaseNotesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReleaseNotesDialogComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ReleaseNotesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
