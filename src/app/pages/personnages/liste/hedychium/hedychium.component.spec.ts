import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HedychiumComponent } from './hedychium.component';

describe('HedychiumComponent', () => {
  let component: HedychiumComponent;
  let fixture: ComponentFixture<HedychiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HedychiumComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HedychiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
