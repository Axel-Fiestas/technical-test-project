import {Component, Input} from '@angular/core';
import {NzInputNumberComponent} from "ng-zorro-antd/input-number";
import {NzAvatarComponent} from "ng-zorro-antd/avatar";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-user-profile-mini-card',
  standalone: true,
  imports: [
    NzInputNumberComponent,
    NzAvatarComponent,
    NgStyle
  ],
  templateUrl: './user-profile-mini-card.component.html',
  styleUrl: './user-profile-mini-card.component.css'
})
export class UserProfileMiniCardComponent {
  @Input()
  public user: {
    name: string,
    email: string,
    imageUrl: string } | undefined;
}
