process.nextTick(() => {
  console.log(0);
});

setImmediate(() => {
  console.log(1);
  setTimeout(() => {
    console.log(2);
  });
});

setTimeout(() => {
  console.log(3);
  process.nextTick(() => {
    console.log(4);
  });
  new Promise((resolve, reject) => {
    resolve(console.log(5));
  }).then(() => {
    console.log(6);
    setTimeout(() => console.log(7));
  });
}, 0);

console.log(8);

new Promise((resolve, reject) => {
  resolve(console.log(9));
}).then(() => {
  process.nextTick(() => {
    console.log(10);
  });
  console.log(11);
  setTimeout(() => console.log(12));
});

setTimeout(() => {
  console.log(13);
}, 0);

setImmediate(() => {
  console.log(14);
  process.nextTick(() => {
    console.log(15);
  });
});

console.log(16);

process.nextTick(() => {
  console.log(17);
});
