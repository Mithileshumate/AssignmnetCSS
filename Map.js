// Problem:
// You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)
// Input:
// abcadeecfb

// Output:
// a=2
// b=2
// c=2
// d=1
// e=2
// f=1

const s ='abcadeecfb'
function map(){
    const ele = new Map();
    s.split('').forEach((element)=>{
        if(ele.has(element)){
            ele.set(element,ele.get(element)+1)
        }
        else{
            ele.set(element,1)
        }
    });
    s.split('').forEach((i)=>{
        if(ele.has(i) && ele.get(i)!=0){
            console.log(i+"="+ele.get(i)+' ');
            ele.set(i,0)
        };
    });
};
map(s)