var hello = 'Hallo';
var world =  'Hello worlk';
const helloWorld ='Hello world';

const anotherFuntion =()=>{
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

const anotherFuntionC = ()=>{
    var localVAr = globalVar = 'Im Global';
}

anotherFuntion();
anotherFuntionC();