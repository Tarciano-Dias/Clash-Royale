import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaClanComponent } from './pesquisa-clan.component';

describe('PesquisaClanComponent', () => {
  let component: PesquisaClanComponent;
  let fixture: ComponentFixture<PesquisaClanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisaClanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaClanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
