import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KisilerEditComponent } from './kisiler-edit.component';

describe('KisilerEditComponent', () => {
  let component: KisilerEditComponent;
  let fixture: ComponentFixture<KisilerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KisilerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KisilerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
