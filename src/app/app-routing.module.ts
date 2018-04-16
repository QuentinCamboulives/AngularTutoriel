import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperstarListComponent } from './superstar/superstar-list/superstar-list.component';
import { SuperstarCreateComponent } from './superstar/superstar-create/superstar-create.component';
import { SuperstarDetailComponent } from './superstar/superstar-detail/superstar-detail.component';

const routes: Routes = [
    {
      path: 'superstar',
      component: SuperstarListComponent
    },
    {
      path: 'superstar/create',
      component: SuperstarCreateComponent
    },
    {
      path: 'superstar/:id',
      component: SuperstarDetailComponent
    },
    {
      path: '**',
      redirectTo: 'superstar', pathMatch: 'full'
    }
  ];

  @NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
  }
