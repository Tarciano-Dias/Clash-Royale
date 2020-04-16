import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaListaComponent } from './cla-lista.component';

describe('ClaListaComponent', () => {
  let component: ClaListaComponent;
  let fixture: ComponentFixture<ClaListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
