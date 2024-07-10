import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummytempComponent } from './dummytemp.component';

describe('DummytempComponent', () => {
  let component: DummytempComponent;
  let fixture: ComponentFixture<DummytempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DummytempComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DummytempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
