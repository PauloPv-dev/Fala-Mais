import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocaoFaleMaisComponent } from './promocao-fale-mais.component';

describe('PromocaoFaleMaisComponent', () => {
  let component: PromocaoFaleMaisComponent;
  let fixture: ComponentFixture<PromocaoFaleMaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromocaoFaleMaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocaoFaleMaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
