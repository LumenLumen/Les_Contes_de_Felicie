import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OzzilonComponent } from './ozzilon.component';

describe('OzzilonComponent', () => {
  let component: OzzilonComponent;
  let fixture: ComponentFixture<OzzilonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OzzilonComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(OzzilonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
