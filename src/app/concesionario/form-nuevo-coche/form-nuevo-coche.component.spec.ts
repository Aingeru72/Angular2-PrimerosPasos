import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNuevoCocheComponent } from './form-nuevo-coche.component';

describe('FormNuevoCocheComponent', () => {
  let component: FormNuevoCocheComponent;
  let fixture: ComponentFixture<FormNuevoCocheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNuevoCocheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNuevoCocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
