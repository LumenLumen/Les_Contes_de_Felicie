import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LueurComponent } from './lueur.component';

describe('LueurComponent', () => {
  let component: LueurComponent;
  let fixture: ComponentFixture<LueurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LueurComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
