import { stringify } from "querystring";

export class Password{
    private email:string;
    private password:string;

    constructor(email:string, password:string){
        this.email = email;
        this.password = password;
    }
}