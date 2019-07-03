
let isTrue : Boolean = true;

let num : number =1232.289;

let color : string ='ksajd'

let list : number[] = [12,3,4]

let listGeneric : Array<number> = [12,3,4.5]

let tuple : [string,number];

tuple = ["hello",10]

enum Color {"blue","yellow","white"}

let c:Color=Color.yellow

let notSure : any = 1
notSure=true

function warn(): number {
    console.log("this is warning message");
    return 4;
}

function myFunc(xyz:string): never {
    throw new Error(xyz);
}

let someFunc : (x:number)=>number;

someFunc=x=> 100*x;

