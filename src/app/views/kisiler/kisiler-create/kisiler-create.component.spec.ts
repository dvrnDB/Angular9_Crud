import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KisilerCreateComponent } from './kisiler-create.component';

describe('KisilerCreateComponent', () => {
  let component: KisilerCreateComponent;
  let fixture: ComponentFixture<KisilerCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KisilerCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KisilerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
