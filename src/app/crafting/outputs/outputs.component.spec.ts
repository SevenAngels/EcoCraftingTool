import {ComponentFixture, TestBed} from '@angular/core/testing';

import {OutputsComponent} from './outputs.component';

describe('OutputsComponent', () => {
  let component: OutputsComponent;
  let fixture: ComponentFixture<OutputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutputsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(OutputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
