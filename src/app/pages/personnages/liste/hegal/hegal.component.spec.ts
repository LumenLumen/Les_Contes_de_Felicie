import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HegalComponent } from './hegal.component';

describe('HegalComponent', () => {
  let component: HegalComponent;
  let fixture: ComponentFixture<HegalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HegalComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
