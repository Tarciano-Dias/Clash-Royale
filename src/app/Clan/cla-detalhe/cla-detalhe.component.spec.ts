import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaDetalheComponent } from './cla-detalhe.component';

describe('ClaDetalheComponent', () => {
  let component: ClaDetalheComponent;
  let fixture: ComponentFixture<ClaDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
