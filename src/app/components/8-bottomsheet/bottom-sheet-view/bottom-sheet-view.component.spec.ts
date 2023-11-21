import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetViewComponent } from './bottom-sheet-view.component';

describe('BottomSheetViewComponent', () => {
  let component: BottomSheetViewComponent;
  let fixture: ComponentFixture<BottomSheetViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomSheetViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BottomSheetViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
