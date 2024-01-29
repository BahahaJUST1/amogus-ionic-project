import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AmogusNewPage } from './amogus-new.page';

describe('AmogusNewPage', () => {
  let component: AmogusNewPage;
  let fixture: ComponentFixture<AmogusNewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AmogusNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
