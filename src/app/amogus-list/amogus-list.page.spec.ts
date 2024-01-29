import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AmogusListPage } from './amogus-list.page';

describe('AmogusListPage', () => {
  let component: AmogusListPage;
  let fixture: ComponentFixture<AmogusListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AmogusListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
