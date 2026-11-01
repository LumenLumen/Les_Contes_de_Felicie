import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IssaeComponent } from './issae.component';

describe('IssaeComponent', () => {
  let component: IssaeComponent;
  let fixture: ComponentFixture<IssaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IssaeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(IssaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
