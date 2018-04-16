import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-superstar-list',
  templateUrl: './superstar-list.component.html',
  styleUrls: ['./superstar-list.component.css']
})
export class SuperstarListComponent implements OnInit {

  public profiles;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.all().subscribe((data: Profile[]) => {
      this.profiles = data;
    });
  }

  public remove(id: number): void {
    this.profileService.delete(id).subscribe(() => {
      this.profileService.all().subscribe((data: Profile[]) => {
        this.profiles = data;
      });
    });
  }
}
