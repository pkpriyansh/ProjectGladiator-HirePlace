export class SearchStudentDto{

    public testId:number;
    public state:string;
    public city:string;
    public level:number;
    public marks:number;

    constructor(testId:number , state:string, city:string, level:number, marks:number){
        this.testId = testId;
        this.state = state;
        this.city = city;
        this.level = level;
        this.marks = marks
    }
}