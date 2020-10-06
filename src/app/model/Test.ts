import { TestRegistration } from './TestRegistration';
import { QuestionBank } from './questions';

export class Test{
    
	
	public testId:number;
	
	
	public testName:string;
	
	
	public companyName:string;
	
	
	public  level1Pass:number;
	
	
	public  level2Pass:number;
	

	public  level3Pass:number;
	
	
	public fileUrl:string;
	
	
    public lastDate:Date;
    
    
	public  questions:QuestionBank[];
	
	
	
	private testRegistration:TestRegistration[]; 
}