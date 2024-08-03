import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelsContainerComponent } from './labels-container.component';

describe('LabelsContainerComponent', () => {
  let component: LabelsContainerComponent;
  let fixture: ComponentFixture<LabelsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabelsContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LabelsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
