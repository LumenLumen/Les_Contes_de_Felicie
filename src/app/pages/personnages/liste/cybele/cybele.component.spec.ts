import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CybeleComponent } from './cybele.component';

describe('CybeleComponent', () => {
  let component: CybeleComponent;
  let fixture: ComponentFixture<CybeleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CybeleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CybeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
