

function datad()
{
    fetch(`https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true`).then((wholedata)=>{
  return wholedata.json();
}).then((actualdata2)=>{
    console.log(actualdata2)
    let data=actualdata2;
    console.log(data.activeCases)
   document.getElementById('activeCases').innerHTML =data.activeCases
   document.getElementById('activeCasesNew').innerHTML =data.activeCasesNew
   document.getElementById('recoveredNew').innerHTML =data.recoveredNew
   document.getElementById('deaths').innerHTML =data.deaths
   document.getElementById('deathsNew').innerHTML =data.deathsNew
    console.log('extracting states',data.regionData)
    let statesdata=data.regionData
    
    for(i=0;i<statesdata.length;i++)
    {
      var states=statesdata[i].region;
      console.log('-------------',states)   
    }
    // var htmldata=`<div id='new-data'></div>`/
        console.log(states)
    document.getElementById('all-states').innerHTML =y
  
  
    document.getElementById('andpdatadecesed').innerHTML =data.regionData[0].deceased
  document.getElementById('andp-data-rec').innerHTML=data.regionData[0].recovered
  document.getElementById('andp-data-new-infect').innerHTML=data.regionData[0].newInfected
  document.getElementById('andp-data-new-rec').innerHTML=data.regionData[0].newRecovered
  document.getElementById('andp-data-total-infect').innerHTML=data.regionData[0].totalInfected
})
}
datad();

// function states(){
//   let statesName=['a','b','c','d']
//   let d=statesName.map((item,index)=>{
//     return (
//      item
//     )
//   })
//   console.log(...d)
//   let x=document.getElementById('states-name').innerHTM
//   console.log(x)
//   x=statesName.map((item,index)=>{
// item
//   })
// }
// states();

// function bodycolor(){
//   let a=['red','blue']
//   let b=a.map((item)=>{return item})
//   // console.log(...b)
//   for(i=0;i<a.length;i++)
//   console.log(a[i])
//   setTimeout(() => document.body.style.background = `${a[i]}`, 1000);
 
// }
// bodycolor();

// function getRandomColor() { //To give me a new rgb number everytime
//   let a=[105,105,105]
//   return (Math.floor(Math.random() * (255 - 10)) + 10);
// }

// function getColor() {
// return `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()},${getRandomColor()})`;
// }

// (function changeColor(){
//   setInterval((() => document.body.style.background = getColor()), 
//       2000);
// })()


// function f1(){
//   let a=['red','blue','gray','yello']
//   return a
// }
// console.log(f1())



// function states(){
  // let statesName=['a','b','c','d']
  // let d=statesName.map((item,index)=>{
  //   return (item)})
  // console.log(d)
// }
// states();

function showdata(){
  document.getElementById('and-nik-div').style.display='block'
}
showdata();

function hidedata(){
  document.getElementById('and-nik-div').style.display='none'
}
hidedata();