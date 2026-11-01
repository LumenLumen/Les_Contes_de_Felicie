import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FushuComponent } from './fushu.component';

describe('FushuComponent', () => {
  let component: FushuComponent;
  let fixture: ComponentFixture<FushuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FushuComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FushuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
