import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MerblancheComponent } from './merblanche.component';

describe('MerblancheComponent', () => {
  let component: MerblancheComponent;
  let fixture: ComponentFixture<MerblancheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MerblancheComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MerblancheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
