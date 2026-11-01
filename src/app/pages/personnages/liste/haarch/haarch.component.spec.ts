import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HaarchComponent } from './haarch.component';

describe('HaarchComponent', () => {
  let component: HaarchComponent;
  let fixture: ComponentFixture<HaarchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HaarchComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HaarchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
