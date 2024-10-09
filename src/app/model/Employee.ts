export class EmployeeModel
{
    empId : number;
    name : string;
    city : string;
    state : string;
    emailId : string;
    contactNo : string;
    address : string;
    pinCode : string;

    constructor(){
        this.address ='';
        this.name = '';
        this.city = '';
        this.state = '';
        this.emailId = '';
        this.contactNo = '';
        this.empId = 0;
        this.pinCode = '';
    }

}