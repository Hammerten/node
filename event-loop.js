setTimeout(() => {
  console.log(0);
}, 0);

console.log(1);

process.nextTick(() => {
  console.log(2);
});

setImmediate(() => {
  console.log(3);
  setTimeout(() => {
    console.log(4);
  });
});

setTimeout(() => {
  console.log(5);
  process.nextTick(() => {
    console.log(6);
  });
  new Promise((resolve, reject) => {
    resolve(console.log(7));
  }).then(() => {
    console.log(8);
    setTimeout(() => console.log(9));
  });
}, 0);

console.log(10);

new Promise((resolve, reject) => {
  resolve(console.log(11));
}).then(() => {
  process.nextTick(() => {
    console.log(12);
  });
  console.log(13);
  setImmediate(() => console.log(14));
  setTimeout(() => console.log(15));
});

setTimeout(() => {
  console.log(16);
}, 0);

setImmediate(() => {
  console.log(17);
  process.nextTick(() => {
    console.log(18);
  });
});

console.log(19);

process.nextTick(() => {
  console.log(20);
});
