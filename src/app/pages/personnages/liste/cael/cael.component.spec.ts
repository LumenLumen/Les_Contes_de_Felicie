import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaelComponent } from './cael.component';

describe('CaelComponent', () => {
  let component: CaelComponent;
  let fixture: ComponentFixture<CaelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaelComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CaelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
