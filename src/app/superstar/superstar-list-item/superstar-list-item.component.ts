import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Profile } from '../profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-superstar-list-item',
  templateUrl: './superstar-list-item.component.html',
  styleUrls: ['./superstar-list-item.component.css']
})
export class SuperstarListItemComponent implements OnInit {

  @Output() remove = new EventEmitter<number>();
  @Input() public profile: Profile;
  public isProfileEditing: boolean;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.isProfileEditing = false;
  }

  public modifyNbProjects(action: string) {
    if (action === 'add') {
      this.profile.nbProjects++;
      this.profileService.put(this.profile).subscribe();
    }
    if (action === 'remove') {
      if (this.profile.nbProjects > 0) {
        this.profile.nbProjects--;
        this.profileService.put(this.profile).subscribe();
      }
    }
  }

  public editProfile() {
    this.isProfileEditing = true;
  }

  public removeProfile() {
    this.remove.emit(this.profile.id);
  }

  public submit(myForm: NgForm) {
    this.profileService.put(this.profile).subscribe();
    this.isProfileEditing = false;
  }

}
