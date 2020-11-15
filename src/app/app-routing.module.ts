import { Component, NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Routes, RouterModule } from '@angular/router';
import { pathToFileURL } from 'url';
import { AddclientComponent } from './addclient/addclient.component';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: 'test',
    component: TestComponent
        },
        {
          path : '',
          component: HomeComponent
        },  
    {
    path: 'clients',
    component: ClientComponent
            },
   {
      path : "addclient",
      component: AddclientComponent
            },
     
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
