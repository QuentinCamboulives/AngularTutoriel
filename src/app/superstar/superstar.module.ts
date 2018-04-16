import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { SuperstarListComponent } from './superstar-list/superstar-list.component';
import { SuperstarListItemComponent } from './superstar-list-item/superstar-list-item.component';
import { ProfileService } from './profile.service';
import { SuperstarCreateComponent } from './superstar-create/superstar-create.component';
import { SuperstarDetailComponent } from './superstar-detail/superstar-detail.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    SuperstarListComponent,
    SuperstarListItemComponent,
    SuperstarCreateComponent,
    SuperstarDetailComponent
  ],
  exports: [SuperstarListComponent],
  providers: [ProfileService]
})
export class SuperstarModule { }
