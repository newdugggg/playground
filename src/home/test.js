function to() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hi");
    }, 1000);
  });
}

to()
  .then((val) =>{ return val + 1})
  .then((val) =>{ return val + 1})
  .then((val) =>{ return val + 1})
  .then((val) => console.log(val));
