import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import{FormsModule} from '@angular/forms'
const appRotes:Routes=[
  {path:"",component:EmployeeComponent}]
  
@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    CommonModule,RouterModule.forChild(appRotes),FormsModule
  ],
  exports:[EmployeeComponent]
})
export class EmployeeModule { 
  constructor(){
    console.log("Emp module");
  }
}
