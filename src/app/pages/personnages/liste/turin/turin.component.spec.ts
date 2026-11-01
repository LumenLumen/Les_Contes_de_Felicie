import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TurinComponent } from './turin.component';

describe('TurinComponent', () => {
  let component: TurinComponent;
  let fixture: ComponentFixture<TurinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TurinComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TurinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
