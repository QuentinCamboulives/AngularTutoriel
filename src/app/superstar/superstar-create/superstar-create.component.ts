import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-superstar-create',
  templateUrl: './superstar-create.component.html',
  styleUrls: ['./superstar-create.component.css']
})
export class SuperstarCreateComponent implements OnInit {

  public myForm: FormGroup;

  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.myForm = new FormGroup({
      avatarLink: new FormControl('https://cdn.dribbble.com/users/395722/screenshots/2231638/dribbble.jpg'),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      startDateWork: new FormControl(undefined, Validators.required),
      cost: new FormControl(0, Validators.required),
      nbProjects: new FormControl(0, Validators.required),
    });
  }

  public submit() {
    this.profileService.add(this.myForm.value).subscribe(() => {
      this.buildForm();
      this.router.navigate(['/superstar']);
    });
  }
}
