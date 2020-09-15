import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './emp/employee/employee/employee.component';
const appRotes:Routes=[
  {path:"employee",loadChildren: () => import('./emp/employee/employee.module').then(m => m.EmployeeModule)}]
  
@NgModule({
  imports: [RouterModule.forRoot(appRotes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(){
    console.log("routing");
  }
  
}
