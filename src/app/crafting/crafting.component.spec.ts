import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CraftingComponent} from './crafting.component';

describe('CraftingComponent', () => {
  let component: CraftingComponent;
  let fixture: ComponentFixture<CraftingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CraftingComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CraftingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
