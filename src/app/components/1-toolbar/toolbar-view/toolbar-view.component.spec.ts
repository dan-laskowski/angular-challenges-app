import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarViewComponent } from './toolbar-view.component';

describe('ToolbarViewComponent', () => {
  let component: ToolbarViewComponent;
  let fixture: ComponentFixture<ToolbarViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToolbarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
