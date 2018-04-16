import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';

import { Profile } from '../profile';
import { ProfileService } from '../profile.service';
import { SuperstarListItemComponent } from '../superstar-list-item/superstar-list-item.component';

@Component({
  selector: 'app-superstar-detail',
  templateUrl: './superstar-detail.component.html',
  styleUrls: ['./superstar-detail.component.css']
})
export class SuperstarDetailComponent implements OnInit {

  public profile: Profile;

  constructor(private profileService: ProfileService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
        if (params.get('id')) {
          this.profileService.get(params.get('id')).subscribe((profile: Profile) => {
            this.profile = profile;
          });
        }
      });
  }

}
