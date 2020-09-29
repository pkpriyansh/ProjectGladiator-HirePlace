export class Register{
    fullName:string;
    email:string;
    mobile:number;
    city:string;
    dateOfBirth:string;
    state:string;
    qualification:string;
    yearOfCompletion:number;
    password:string;
    confirmPassword:string;
    captcha:string;

    constructor(fullName:string, email:string, mobile:number, city:string, dateOfBirth:string, state:string, qualification:string,yearOfCompletion:number, password:string, confirmPassword:string,captcha:string){
        this.fullName=fullName;
        this.email=email;
        this.mobile=mobile;
        this.city=city;
        this.dateOfBirth=dateOfBirth;
        this.state=state;
        this.qualification=qualification;
        this.yearOfCompletion=yearOfCompletion;
        this.password=password;
        this.confirmPassword=confirmPassword;
        this.captcha=captcha;
    }

    toString():string{
        return "Name: "+this.fullName+", Email: "+this.email+", Mobile: "+this.mobile+", City: "+this.city+", Date of birth: "+this.dateOfBirth+", Qualification: "+this.qualification+", Year of completion: "+this.yearOfCompletion+", password: "+this.password+" , confirm passsword: "+this.confirmPassword+", Captcha: "+this.captcha;
    }


}