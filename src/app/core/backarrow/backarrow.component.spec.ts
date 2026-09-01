import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BackarrowComponent } from './backarrow.component';

describe('BackarrowComponent', () => {
  let component: BackarrowComponent;
  let fixture: ComponentFixture<BackarrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackarrowComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BackarrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
