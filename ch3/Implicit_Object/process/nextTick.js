setImmediate(()=>{
  console.log('immediate');
})

// nextTick is executed earlier than setTimeout & setImmediate
process.nextTick(()=>{
  console.log('nextTick');
})

setTimeout(() => {
  console.log('timeout');
}, 0);

// Promise is also executed earlier than setTimeout & setImmediate
Promise.resolve().then(()=>console.log('promise'));