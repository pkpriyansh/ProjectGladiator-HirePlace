export class Questions{
    id:number;
    question: string;
    optionA: string;
    optionB: string;
    optionC: string;
    optionD: string;
    correctoption:number;
    
     toString():string{
         return  "["+this.id+", "+this.question+", "+this.optionA +", "+this.optionB +", "+this.optionC +", "+this.optionD +", "+this.correctoption +", "+ "]";
     }

}