import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KisilerPageComponent } from './kisiler-page.component';

describe('KisilerPageComponent', () => {
  let component: KisilerPageComponent;
  let fixture: ComponentFixture<KisilerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KisilerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KisilerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
