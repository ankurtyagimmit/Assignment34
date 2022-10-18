
/*for(let i = 0; i<5; i=i+1)
{
    console.log(`${i}`);//console.log(i);
}*/

/*let Mobile=["Mobile1","Mobile2","Mobile3","Mobile4",];
let phone=[];
for(let i=0;i<Mobile.length; i++)
{
    phone.push(Mobile[i].toUpperCase());
}
console.log(phone)*/
/*let i=0;
while(i<=5)
{
    console.log(i)
    i++;
}*/
/*let i=0;
do{
    console.log(i);
    i=i+1;
}
while(i<=5);*/

/*let M=["Mobile1","Mobile2","Mobile3","Mobile4",];

for(let i=0;i<M.length; i++)
{
    if(M[i] == "Mobile3")
{
    continue;//break;
}
    console.log(M[i]);
}*/

/*let userDetails={
    firstName:'Ankur',
    lastName :'Tyagi',
    companyName :'Creative Squadz',
    loginCounter: 25,
    Roll:'Student',
    Login:true,
};

console.log(userDetails.firstName);
console.log(userDetails.lastName);
console.log(userDetails["firstName"]); // Not a good practice
*/
/*function square(num)
{
//let num=2;
console.log(num*num);
}

square(2);*/

/*function areaofCircle(r)
{
    //console.log(3.14*r*r)
    let area=Math.PI*r*r;
    return area;
}

let result=areaofCircle(7);
console.log(result);*/
/*function sumOfAll(sum)
{
    
    for(let i=0;i<arguments.length;i++)
    {
        console.log(arguments);
        //let sum=0
        sum=sum+arguments[i];
    }
    return sum;
}
console.log(sumOfAll(10,20,30,40,50,60));*/
/*let sumOfAll = (x,y) => {
    let sum = x + y;
    return sum
};


let result=sumOfAll(2, 6);
console.log(result);*/
/*let userDetails={
    firstName:'Ankur',
    lastName :'Tyagi',
    companyName :'Creative Squadz',
    loginCounter: 25,
    Roll:'Student',
    Login:true,
    courseList:[],
 buyCourse:function (CourseName){
    this.courseList.push(CourseName);

 },
 getCourseCount: function(){
    return `${this.firstName} is have a course count of ${this.courseList.length}`;
 },
};
userDetails.buyCourse("Prontend Dev");
userDetails.buyCourse("Prontend Dev v2");

console.log(userDetails.getCourseCount());
//console.log(userDetails.getCourseCount());*/

let fruits=["Apple","orange","papaya","grapes",];
let win1=[];
let i=0;
while(i<fruits.length)
{
    
    win1.concat(fruits[i].toLocaleLowerCase());
    i++;
}
console.log(win1);
/*let Mobile=["Mobile1","Mobile2","Mobile3","Mobile4",];
let phone=[];
for(let i=0;i<Mobile.length; i++)
{
    phone.push(Mobile[i].toUpperCase());
}
console.log(phone)*/