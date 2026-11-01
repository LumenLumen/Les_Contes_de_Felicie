import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KaosaComponent } from './kaosa.component';

describe('KaosaComponent', () => {
  let component: KaosaComponent;
  let fixture: ComponentFixture<KaosaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KaosaComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(KaosaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
