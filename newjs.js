// // // // // // // // // // // // day 1 javascript.info

// // // // // // // // // // // console.log('hello')
// // // // // // // // // // // // prompt box
// // // // // // // // // // // // let age= prompt('whats your age',40)
// // // // // // // // // // // // console.log(`age is ${age }`)


// // // // // // // // // // // // confirm
// // // // // // // // // // // // let k=confirm('are you keshav?')
// // // // // // // // // // // // if(k)
// // // // // // // // // // // // {
// // // // // // // // // // // //     // var x= document.getElementById('demo').innerHTML
// // // // // // // // // // // //     alert('sjdskjad')
// // // // // // // // // // // //     prev
// // // // // // // // // // // // }
// // // // // // // // // // // // else
// // // // // // // // // // // // {
// // // // // // // // // // // //     alert('please register')
// // // // // // // // // // // // }

// // // // // // // // // // // // let a=4000
// // // // // // // // // // // // let b=a++
// // // // // // // // // // // // alert(a>>4000)

// // // // // // // // // // // // function expression

// // // // // // // // // // // let a=function(){
// // // // // // // // // // //     alert('fxn')
// // // // // // // // // // // }
// // // // // // // // // // // a();

// // // // // // // // // // // arrow fxn
// // // // // // // // // // // function add(a,b)
// // // // // // // // // // // {
// // // // // // // // // // //     return (console.log(a+b))

// // // // // // // // // // // }
// // // // // // // // // // // add(1,2)

// // // // // // // // // // let ad=(a,b)=>alert(a+b);
// // // // // // // // // // ad(2,3)

// // // // // // // // // // objects
// // // // // // // // // let a={
// // // // // // // // //     name:'keshav',
// // // // // // // // //     lname:'goyal'
// // // // // // // // // }
// // // // // // // // // alert()

// // // // // // // // let arr=['keshav','goyal']
// // // // // // // // // let result= arr.push('l')
// // // // // // // // // let result2=arr.pop()
// // // // // // // // // let result3=arr.shift()
// // // // // // // // // let result4= arr.unshift('hello')

// // // // // // // // // let result5=arr.splice(1,1,'atul')
// // // // // // // // let result6=arr.slice(1,2)
// // // // // // // // console.log(arr)

// // // // // // // let user = {
// // // // // // //     name: "John",
// // // // // // //     age: 30
// // // // // // //   };

// // // // // // //   user.sayHi = function() {
// // // // // // //     alert("Hello!");
// // // // // // //   };

// // // // // // //   user.sayHi(); // Hello!
// // // // // // let user = { name: "John" };
// // // // // // let admin = { name: "Admin" };

// // // // // // function sayHi(x) {
// // // // // //   alert( x.name);
// // // // // // }
// // // // // // sayHi(user);
// // // // // function User(name) {
// // // // //     this.name = name;
// // // // //     this.isAdmin = false;
// // // // //   }

// // // // // //   let user = new User("Jack");
// // // // //   alert(User())

// // // // // //   alert(user.name); // Jack
// // // // // //   alert(user.isAdmin); // false

// // // // function  f1(name){
// // // //     // this={}
// // // //     this.name=name;
// // // //     this.isAdmin=false
// // // //     // alert(this)
// // // // }
// // // // let f2 = new f1("Jack")
// // // // console.log(f2)
// // // // // alert(f2)

// // // // // ;
// // // // // alert(f1('keshav'));
// // // // let range = {
// // // //     from: 1,
// // // //     to: 5
// //   };

// // //   let range=[1,2,3]

// // //   // We want the for..of to work:
// // //   for(let num of range) 
// // //   {
// // //       console.log(num)
// // //   }
// // function loadScript(src) {
// //     // creates a <script> tag and append it to the page
// //     // this causes the script with given src to start loading and run when complete
// //     let neww = document.createElement('script');
// //     console.log(neww);
// //     neww.src = src;
// //     document.head.append(neww);
// //   }
// //   loadScript('./htmlfile');

// // var ob={
// //     name:'keshav',
// //     name:'nbkb'
// // }

// // console.log(ob.name)

// // ...........................................................................................................symbol...........................................................
// // let id1 = Symbol();
// // let id2=Symbol();
// // var a={
// //     id1:'keshacv',
// //     id1:'kj'
// // }

// // console.log(a.id1)
// // let n = 1.23256;

// // alert( n.toFixed(2) )
// // let num = 1.23556;

// // alert( Math.round(num * 100) / 100 )
// // alert( +'100px' );

// // parseInt----------> return integer value from a string
// // alert(parseInt('12$'))

// // var b={
// //     name:'keshav',
// //     lna:'goyal'
// // }

// // var c=[];
// // var d=[c.push(b)]
// // alert(d.name)
// // console.log('o\"bj"\ect')

// //----------------------------------------------------------------------------------------- CALLBACKS-----------------------------------------------------------------------------
// // const pOne=(fname,cb)=>{
// //     setTimeout(function(){
// //         console.log(`i am talking to some one else ,i will call you later ${fname}`);
// //         cb();
// //     },3000);

// // }

// // const pTwo=()=>{
// //     console.log('ok i seen your msg')
// // }
// // pOne('keshav',pTwo);

// // example2 for callback

// // first for addition

// // let addition=(n1,n2)=>{
// //   var sum= n1+n2
// //   return (sum
// //     // console.log(sum)
// //     )
// // } 
// // let showResult=(data)=>{  console.log('getting data',data)}


// // let result= addition(1,2)
// // showResult(result)

// // example 3

// // function showResult(result){
// //     console.log(result)
// // }

// // function addition(n1,n2){
// //     var sum=n1+n2
// //   return sum
// // }

// // let forsum=addition(2,3)
// // showResult(forsum)


// // ......................................................................................++day2++................................

// // ---------------------------------------------------------------------PROMISES--------------------------------------

// // const pObj1=new Promise((resolve,reject)=>{

// //     setTimeout(()=>{
// //         let roll_no=[1,2,2,4]
// //         if(roll_no)
// //         {

// //             resolve(roll_no);
// //         }
// //         else
// //         reject('error to fatching data')
// //     },2000) 
// // });

// // const bioData=(indexnumber)=>{
// //     return new Promise((resolve,reject)=>{
// //         setTimeout((indexnumber)=>{
// //             let myData={
// //                 name:'keshav',
// //                 age:'22'
// //             }
// //             resolve(`name is:${myData.name} and age is:${myData.age} where my roll is ${indexnumber}`)
// //             reject('pass the roll no.')
// //         },2000,indexnumber);
// //     });
// // }

// // const newData=(agee)=>{
// //     return new Promise((resolve,reject)=>{
// //         setTimeout((agee)=>{
// //             let str=`i passed agee ${agee}`
// //             resolve(str)

// //         },2000,agee);



// //     });
// // }

// // pObj1.then((result)=>{
// //     console.log(result)
// //     bioData(result[2]).then((newresult)=>{
// //         console.log(newresult)
// //         newData(newresult.age).then((k)=>{
// //             console.log(k)

// //         })
// //     })


// // }).catch((error)=>{
// // console.log(error)
// // })

// // ............................................................................Fetch api()----------------------    -------------------

// // fetch('https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true').then((covid_data) => {
// //     console.log(covid_data)
// //     return covid_data.json()
// // }).then((actualdata) => {
// //     let x = actualdata

// //     console.log(x)
// //     console.log('region data is', x.regionData[1])
// //     let y = x.regionData[1].deceased    
// //     console.log(y)

// //     document.getElementById('covid_data').innerHTML = y

// // }).catch((error)=>{
// //     console.log(`error in fatching data${error}`)
// //     document.getElementById('covid_data').innerHTML = error
// // })


// // cobid app for this-----------code++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // function coviddata(code){
// //     fetch('https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true').then((covid_data) => {
// //     // console.log(covid_data)
// //     return covid_data.json()
// // }).then((actualdata) => {
// //     let x = actualdata

// //     // console.log(x)
// //     // console.log('region data is', x.regionData[code])
// //     let y = x.regionData[code]  
// //     console.log(y)

// //     document.getElementById('covid_data').innerHTML = y

// // }).catch((error)=>{
// //     if(code>50)
// //     {
// //         console.log('kjkjkjh')
// //     }
// //     console.log(`error in fatching data${error}`)
// //     document.getElementById('covid_data').innerHTML = error
// // })

// // }

// // function showdata(){
// //     let x=document.getElementById('data1').value
// //     console.log(x)
// //     coviddata(document.getElementById('data1').value);
// // }


// // =============================================================================================async-await=================================================================

// // first create promise

// // const PromiseObject=new Promise((resolved,reject)=>{
// //     setTimeout(()=>{
// //         let roll_no=[1,2,3,4,5]
// //         resolved(roll_no)
// //     },2000)
// // })

// // const bioData=(indexnumber)=>{
// //         return new Promise((resolve,reject)=>{
// //             setTimeout((indexnumber)=>{
// //                 let myData={
// //                     name:'keshav',
// //                     age:'22'
// //                 }
// //                 resolve(`name is:${myData.name} and age is:${myData.age} where my roll is ${indexnumber}`)
// //                 reject('pass the roll no.')
// //             },2000,indexnumber);
// //         });
// //     }


// // // this is normal promise catch---------->
// // // PromiseObject.then((data)=>{
// // //     console.log(data)

// // // })

// // // we can do the same using async await

// // async function getdata(){
// //     let data=await PromiseObject;
// //     console.log(data);
// //     let data2=await bioData(data[0]);
// //     console.log(data2)
// //     document.getElementById('show').innerHTML=data2
// // }
// // getdata();


// // function checkdata(){
// //     const PromiseObject=new Promise((resolved,reject)=>{
// //         setTimeout(()=>{
// //             let roll_no=[1,2,3,4,5]
// //             resolved(roll_no)
// //         },2000)
// //     })
    
// //     const bioData=(indexnumber)=>{
// //             return new Promise((resolve,reject)=>{
// //                 setTimeout((indexnumber)=>{
// //                     let myData={
// //                         name:'keshav',
// //                         age:'22'
// //                     }
// //                     resolve(`name is:${myData.name} and age is:${myData.age} where my roll is ${indexnumber}`)
// //                     reject('pass the roll no.')
// //                 },2000,indexnumber);
// //             });
// //         }
    
    
// //     // this is normal promise catch---------->
// //     // PromiseObject.then((data)=>{
// //     //     console.log(data)
    
// //     // })
    
// //     // we can do the same using async await
    
// //     async function getdata(){
// //         let data=await PromiseObject;
// //         console.log(data);
// //         let data2=await bioData(data[0]);
// //         console.log(data2)
// //         document.getElementById('show').innerHTML=data2
// //     }
// //     getdata();

// // }


// // .......................................................................................rest-operator-------------------------------------------------------------------------

// // function add(...args)
// // {
// //     let sum=0;
// //    for (let nu of args)
// //    {
// //      sum+=nu;
// //     }
// // console.log(sum)
// // }
// // add(2,3,8,9,80,90,989)

// // function showName(firstName, lastName, ...titles) {
// //     alert( firstName + ' ' + lastName ); // Julius Caesar
  
// //     // the rest go into titles array
// //     // i.e. titles = ["Consul", "Imperator"]
// //     alert( titles ); // Consul
// //     // alert( titles[1] ); // Imperator
// //     // alert( titles.length ); // 2
// //   }
  
// //   showName("Julius", "Caesar", "Consul", "Imperator");
// // ......................................................................................argument.....................................
// // function showName() {
// //     // alert( arguments.length );
// //     // alert( arguments[0] );
// //     // alert( arguments[1] );
// //   console.log(arguments)
// //     // it's iterable
// //     for(let arg of arguments) alert(arg);
// //   }
  
// //   // shows: 2, Julius, Caesar
// //   showName("Julius", "Caesar");
  
//   // shows: 1, Ilya, undefined (no second argument)
// //   showName("Ilya");

// // .............................................................................spread operator...................

// // let arr=[1,2,3,4,5,11000000000000000000,10000000000000000000000000000000000000,122222222222222222222222222222222222222222222222222222222222222];
// // let arr1=[2666666666662112343422222222222222222222222222222222222244444444445555555555555522222222222222222222222222222222222,5]
// // console.log(Math.max(...arr,...arr1))

// // let x= [...arr,...arr1,4,5]
// // console.log(x)

// // .......................................................................copying array......using spread operator....................
// // let arr=[1,2,3,4]
// // console.log('origional is:',arr)
// // let arrcpy=[...arr]
// // console.log(arrcpy)
// // arr.push(2)
// // console.log('origional after push:',arr)
// // console.log(...arr)


// // ................................................................................classes....................................................
// // example 1
// class Student {

//     constructor(){
//         let a=6;
//         console.log(a)
//     }

// }

// let x=new Student()
// x;

// // example 2

// class Teachers{
//     bioData(){
//         console.log('hello i am a computer teacher.')
//     }
// }
// let y= new Teachers();
// y.bioData()

// // exp 3-----------------------------------inheritance in class----------------------------------------------------------------------

// class users{
//     constructor(a,b,c)
//     {
//         this.myname=a;
//         this.myage=b;
//         this.mydesc=c
//     }

//     showdata(){
//         console.log(`hello my name is:${this.myname},my age is:${this.myage},and my description is:${this.mydesc}`)
//     }
// }


// class players extends users{
//     constructor(a,b,c,game)
//     {
//         super(a,b,c);    
//         this.mygame=game
       
//     }
//   againdetails(){
//     {
//         // console.log(this.myname,this.myage,this.mydesc,this.mygame);
//         return `${super.showdata()},i am player of ${this.mygame}`
//    }
//   }
// }

// let k= new users('keshav',22,'i am working in durapid ');
// k.showdata();

// let s=new players('keshav',22,'i am working in durapid ','hockey'  )
// s.againdetails()


// // ............................................................................settimeout settimeinterval.................................
// function alll()
// { 
//     console.log('hello')
// }

// setTimeout(alll,2000);

// // ---------------------------------------------------------------------------------------------------------------------------------------
// function getFunc() {
//     let valuet = "test";
  
//     let func = new Function(alert(valuet));
  
//     return func;
//   }
  
//   getFunc(); 



// function trycatch(){

//     try{

//      addd('hello')

//     }
//     catch(Exception){
//      console.log(`error is ${   (Exception)}`)
//     }
// }

// trycatch()


// function a(){
//     var e = document.getElementById("ddlViewBy");
//         var strUser = e.value;
//         console.log(strUser)
// }
// a();    