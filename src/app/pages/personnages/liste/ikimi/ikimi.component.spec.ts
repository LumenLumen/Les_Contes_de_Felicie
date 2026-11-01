import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IkimiComponent } from './ikimi.component';

describe('IkimiComponent', () => {
  let component: IkimiComponent;
  let fixture: ComponentFixture<IkimiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IkimiComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(IkimiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
