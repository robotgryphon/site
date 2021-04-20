import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurseforgeCardComponent } from './curseforge-card.component';

describe('CurseforgeCardComponent', () => {
  let component: CurseforgeCardComponent;
  let fixture: ComponentFixture<CurseforgeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurseforgeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurseforgeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
