import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChwiichComponent } from './chwiich.component';

describe('ChwiichComponent', () => {
  let component: ChwiichComponent;
  let fixture: ComponentFixture<ChwiichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChwiichComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ChwiichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
