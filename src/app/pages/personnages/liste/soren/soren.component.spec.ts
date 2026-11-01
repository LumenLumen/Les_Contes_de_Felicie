import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SorenComponent } from './soren.component';

describe('SorenComponent', () => {
  let component: SorenComponent;
  let fixture: ComponentFixture<SorenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SorenComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SorenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
