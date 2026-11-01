import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OunComponent } from './oun.component';

describe('OunComponent', () => {
  let component: OunComponent;
  let fixture: ComponentFixture<OunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OunComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(OunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
