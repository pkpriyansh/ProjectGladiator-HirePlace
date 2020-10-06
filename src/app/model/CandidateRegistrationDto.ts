export class CandidateRegistrationDto{

    public email:string;
	
	
	public  firstName :string;
	
	
	public lastName:string;
	
	
	public city:string;
	
	
	public state:string;
	
	
	public qualification:string;
	
	
	public yearOfCompletion:number;
	
	
	public password:string;
	
	public dateOfBirth:Date;
	
	
    public mobileNumber:string;
    
    


	constructor(firstName:string, lastName:string, email:string, mobileNumber:string, city:string, dateOfBirth:Date, state:string, qualification:string,yearOfCompletion:number, password:string){
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.mobileNumber=mobileNumber;
        this.city=city;
        this.dateOfBirth=dateOfBirth;
        this.state=state;
        this.qualification=qualification;
        this.yearOfCompletion=yearOfCompletion;
        this.password=password;
       
      
    }
}
