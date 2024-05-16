import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileMiniCardComponent } from './user-profile-mini-card.component';

describe('UserProfileMiniCardComponent', () => {
  let component: UserProfileMiniCardComponent;
  let fixture: ComponentFixture<UserProfileMiniCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProfileMiniCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserProfileMiniCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
