import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItens } from './menu-itens';

describe('MenuItens', () => {
  let component: MenuItens;
  let fixture: ComponentFixture<MenuItens>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuItens]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuItens);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
