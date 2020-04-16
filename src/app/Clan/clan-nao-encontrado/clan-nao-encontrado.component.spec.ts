import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanNaoEncontradoComponent } from './clan-nao-encontrado.component';

describe('ClanNaoEncontradoComponent', () => {
  let component: ClanNaoEncontradoComponent;
  let fixture: ComponentFixture<ClanNaoEncontradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanNaoEncontradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanNaoEncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
