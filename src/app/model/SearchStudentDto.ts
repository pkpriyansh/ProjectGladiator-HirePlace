export class SearchStudentDto{

    public testId:number;
    public state:string;
    public city:string;
    public level:number;
    public marks:number;
    public marksBelow:number;
    public pass_Fail:number;

    constructor(testId:number , state:string, city:string, level:number, marks:number, marksBelow:number, pass_Fail:number){
        this.testId = testId;
        this.state = state;
        this.city = city;
        this.level = level;
        this.marks = marks
        this.marksBelow = marksBelow;
        this.pass_Fail = pass_Fail;
    }
}