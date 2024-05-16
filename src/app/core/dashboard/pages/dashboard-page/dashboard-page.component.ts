import { Component } from '@angular/core';
import {AuthenticateService} from "../../../../services/authenticate.service";
import User from "../../../../shared/interfaces/User";
import {NzFlexDirective} from "ng-zorro-antd/flex";
import {NzTypographyComponent} from "ng-zorro-antd/typography";
import {
  NzContentComponent,
  NzFooterComponent,
  NzHeaderComponent,
  NzLayoutComponent,
  NzSiderComponent
} from "ng-zorro-antd/layout";
import {NzMenuDirective, NzMenuItemComponent} from "ng-zorro-antd/menu";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {
  UserProfileMiniCardComponent
} from "../../../../shared/components/user-profile-mini-card/user-profile-mini-card.component";

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    NzFlexDirective,
    NzTypographyComponent,
    NzSiderComponent,
    NzLayoutComponent,
    NzHeaderComponent,
    NzContentComponent,
    NzFooterComponent,
    NzMenuDirective,
    NzMenuItemComponent,
    NzIconDirective,
    RouterLink,
    RouterOutlet,
    UserProfileMiniCardComponent
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {

  currentUser:User | null = null;

  constructor(private authService: AuthenticateService, private router: Router){

    this.authService.currentUser$.subscribe(user=>{
      this.currentUser=user;
    })

  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
