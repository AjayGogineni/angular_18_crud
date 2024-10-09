import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { EmployeeModel } from './model/Employee';
import { createInjectableType } from '@angular/compiler';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_18_crud';

  employeeForm? : FormGroup;
  employeeobj: EmployeeModel = new EmployeeModel();

  constructor(){
    this.createFrom();
  }

  createForm(){
    this.employeeForm = new FormGroup({
      empid : new FormControl(this.employeeobj.emailId),
      name:new FormControl(this.employeeobj.name),
      city:new FormControl(this.employeeobj.city),
      address:new FormControl(this.employeeobj.address),
      contactNo:new FormControl(this.employeeobj.contactNo),
      emailId:new FormControl(this.employeeobj.emailId),
      pinCode:new FormControl(this.employeeobj.pinCode),
      state:new FormControl(this.employeeobj.state)
    });
  }
}
