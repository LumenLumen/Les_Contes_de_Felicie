import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinjComponent } from './linj.component';

describe('LinjComponent', () => {
  let component: LinjComponent;
  let fixture: ComponentFixture<LinjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinjComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LinjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
