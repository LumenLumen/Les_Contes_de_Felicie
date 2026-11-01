import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnigyeComponent } from './anigye.component';

describe('AnigyeComponent', () => {
  let component: AnigyeComponent;
  let fixture: ComponentFixture<AnigyeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnigyeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AnigyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
