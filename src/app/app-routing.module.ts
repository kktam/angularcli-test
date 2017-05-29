import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccordionTabComponent } from './accordion-tab/accordion-tab.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { AccordionComponent } from './accordion/accordion.component';

const routes: Routes = [
    {
    path: '',
    component: AccordionComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }