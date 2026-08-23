import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolemeComponent } from './soleme.component';

describe('SolemeComponent', () => {
  let component: SolemeComponent;
  let fixture: ComponentFixture<SolemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolemeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SolemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
