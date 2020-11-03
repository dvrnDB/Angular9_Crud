import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KisilerListComponent } from './kisiler-list.component';

describe('KisilerListComponent', () => {
  let component: KisilerListComponent;
  let fixture: ComponentFixture<KisilerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KisilerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KisilerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
