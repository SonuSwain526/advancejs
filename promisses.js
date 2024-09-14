// callback hell

// const x = () => {
//     setTimeout(() => {
//         console.log("i am gourab")
//         setTimeout(() => {
//             console.log("i am gourab")
//             setTimeout(() => {
//                 console.log("i am gourab")
//                 setTimeout(() => {
//                     console.log("i am gourab")
//                     setTimeout(() => {
//                         console.log("i am gourab")
//                         setTimeout(() => {
//                             console.log("i am gourab")
//                             setTimeout(() => {
//                                 console.log("i am gourab")
//                                 setTimeout(() => {
//                                     console.log("i am gourab")
//                                     setTimeout(() => {
//                                         console.log("i am gourab")
//                                     },1000);
//                                 },1000);
//                             },1000);
//                         },1000);
//                     },1000);
//                 },1000);
//             },1000);
//         },1000);
//     },1000);
// }
// x();

// this is the problem with callback hell it is vary difficult to understand the code so for this reason we have PROMIDSSES

// promisses

const x = new Promise((resove, rejected) => {
    // setTimeout(() => {
    //     return rejected("hii");
    // },2000);
    setTimeout(() => {
        if(Math.random() > 0.4){
            resove ("student is pass")
        }
        else{
            rejected("student is fail");
        }
    },200);
});

const y = new Promise((resove, rejected) => {
   
    setTimeout(() => {
        if(Math.random() > 0.4){
            resove ("student is pass")
        }
        else{
            rejected("student is fail");
        }
    },2500);
});


const z = new Promise((resove, rejected) => {
   
    setTimeout(() => {
        if(Math.random() > 0.4){
            resove ("student is pass")
        }
        else{
            rejected("student is fail");
        }
    },2500);
});



// promise mathds

Promise.all([x,y,z])
.then((pro) => {
    console.log(pro);    
})
.catch((err)=>{
    console.log(err)
})

Promise.allSettled([x,y,z])
.then((pr) => {console.log(pr);}).catch((err) => {console.log(err)});

Promise.race([x,y,z])
.then((pr) => {console.log(pr);}).catch((err) => {console.log(err)});