const timeout = setTimeout(() => {
  console.log('Execute in 1.5sec');
}, 1500);

const interval = setInterval(() => {
  console.log('Execute every 1sec');
}, 1000);

const timeout2 = setTimeout(() => {
  console.log('Not Execute timeout');
}, 3000);

setTimeout(() => {
  clearTimeout(timeout2);
  clearInterval(interval);
}, 2500);

const immediate = setImmediate(()=>{
  console.log('Execute right away');
})

const immediate2 = setImmediate(()=>{
  console.log('Not Execute immediate');
})

clearImmediate(immediate);