import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SebanComponent } from './seban.component';

describe('SebanComponent', () => {
  let component: SebanComponent;
  let fixture: ComponentFixture<SebanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SebanComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SebanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
