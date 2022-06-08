const bluilCount = (i)=>{
    let count = i;
    const displayCount = ()=>{
        console.log(count ++);
    };
    return displayCount;
};

const myCount = bluilCount(1);
myCount();
myCount();
myCount();

const myOtherCount = bluilCount(10);
myOtherCount();
myOtherCount();