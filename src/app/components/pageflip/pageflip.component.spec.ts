import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageflipComponent } from './pageflip.component';

describe('PageflipComponent', () => {
  let component: PageflipComponent;
  let fixture: ComponentFixture<PageflipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageflipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageflipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
