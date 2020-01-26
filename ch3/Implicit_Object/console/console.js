const string = 'abc';
const number = 1;
const boolean = true;
const obj ={
  outside:{
    inside:{
      key:'value'
    }
  }
}

// records between time ------ timeEnd
console.time('Total Time');
console.log('Common log. It can be divided by , , , ,');
console.log(string, number, boolean);
console.error('Please put error message in console.error ');

// 'colors' is different by environment
// 'depth' is to decide to show how deep the object
console.dir(obj,{colors:false,depth:2});
console.dir(obj,{colors:true,depth:1});

console.time('Check For Loop Time');
for(let i=0;i<1000000;i++){
  continue;
}
console.timeEnd('Check For Loop Time');

function b(){
  // trace where the error happened
  console.trace('Error location trace');
}
function a(){
  b();
}
a();

console.timeEnd('Total Time');


