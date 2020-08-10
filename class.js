class student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "kolimunsa School"
    }
}

const student1 = new student(10, "pallab");
const student2 = new student(12, "shuvo");
const student3 = new student(45, "bappy");

console.log(student1.name, student2.name);
console.log(student3);