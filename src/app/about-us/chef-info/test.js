// Promise
// console.log('1')
// console.log('2')
// console.log('1')
// console.log('1')
// console.log('1')
// console.log('1')
// setTimeout(() => {console.log('setTime')}, 1000)
// console.log('1')

const data = new Promise((resolve, reject) => {
  fetch =  'https//' // 200ms
    console.log("hi");
    resolve('')
}).then(()=>{

}).then(()=> {

}).catch(()=> {

})


async function someFunc() {
  try {
    const rec = await data;
    const dev = await dofunc(rec);
    console.log("1");
  } catch (data) {
    console.log(data);
  }
}

async function dofunc(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + 1);
      resolve(a + 1);
      resolve(a + 1);
      resolve(a + 1);
      resolve(a + 1);
      resolve(a + 1);
      resolve(a + 1);
    }, 1000);
  });
}

// someFunc();

// new Promise => resolve, reject => then , catch,



// a fuc that takes a fucs as param


function firstFuc(sec) {
  console.log('data')
  sec('callback')
}

const secondFunc = (d) => {
  console.log(d)
}

firstFuc(secondFunc)
// observables () {
//   observer.next();
// }

observer = {
  next : () => {},
  error : () => {},
  complete :() => {},
}
