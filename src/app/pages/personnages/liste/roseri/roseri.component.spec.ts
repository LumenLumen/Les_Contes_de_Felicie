import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoseriComponent } from './roseri.component';

describe('RoseriComponent', () => {
  let component: RoseriComponent;
  let fixture: ComponentFixture<RoseriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoseriComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RoseriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
