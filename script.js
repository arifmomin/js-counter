// const count = document.querySelectorAll (".count");

// const allcount = Array.from(count);
// allcount.forEach((eachitem)=>{
//     let count = eachitem.innerHTML;
//     let actualcount = count.split("+")[0];
//     console.log(actualcount);

// let initialcount = 0;
// let counterUp = () => {
// eachitem.innerHTML=initialcount++;
// if(initialcount > eachitem){
//     clearInterval(stop);
// }
// }

// let stop = setInterval (() => {
//     counterUp();
// }, 1000)
// });

const count = document.querySelectorAll (".count");
const allCount = Array.from(count);
allCount.forEach((eachitem) =>{
    let actualcount = eachitem.dataset.count
    let initialcount = 0;
    let counterUp = ()=>{
        eachitem.innerHTML = `${initialcount ++} +`;
        if(initialcount > actualcount){
            clearInterval(stop);
        }
    }

    let stop = setInterval(()=>{
        counterUp()
    },1)
})
