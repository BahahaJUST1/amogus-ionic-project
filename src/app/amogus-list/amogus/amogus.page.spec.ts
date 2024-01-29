import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AmogusPage } from './amogus.page';

describe('AmogusPage', () => {
  let component: AmogusPage;
  let fixture: ComponentFixture<AmogusPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AmogusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
