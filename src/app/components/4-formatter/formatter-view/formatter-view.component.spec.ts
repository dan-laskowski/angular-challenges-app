import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatterViewComponent } from './formatter-view.component';

describe('FormatterViewComponent', () => {
  let component: FormatterViewComponent;
  let fixture: ComponentFixture<FormatterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormatterViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormatterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
