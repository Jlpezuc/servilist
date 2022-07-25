import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessButtonsComponent } from './access-buttons.component';

describe('AccessButtonsComponent', () => {
  let component: AccessButtonsComponent;
  let fixture: ComponentFixture<AccessButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
