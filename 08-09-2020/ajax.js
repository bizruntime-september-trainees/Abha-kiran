console.log('Ajax code in one page');

let fatchBtn=document.getElementById('fatchbtn');
fatchBtn.addEventListener('click',buttonClickHandler);

function buttonClickHandler(){
    console.log('you have click the fatchbtn');
    // insitate xhr object
    const xhr =new XMLHttpRequest();
    // open the object
    //xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true);
    //use this for post required
    xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true);
    xhr.getResponseHeader('contant-type','application/json');
    // what to do on progress(optional)
    xhr.onprogress=function(){
        console.log('on progress');
    }
	//xhr xmlHttpRequest
   // xhr.onreadystatechange=function(){
       // console.log('ready state is',xhr.readyState);
    //}
    // what to do when response is ready
    xhr.onload=function(){
        if(this.status === 200){
            console.log(this.responseText);
        }
        else{
            console.error('some error occured');
        }
    }
    //send the request
    params="name=test3455&salary=123&age=23";		
    xhr.send(params);
    console.log('we are done');
}
let popBtn=document.getElementById('fatchbtn');
popBtn.addEventListener('click',popHandler);
 function popHandler(){
    console.log('you have click the pop handler');
    // insitate xhr object
    const xhr =new XMLHttpRequest();
    // open the object
    xhr.open('GET','http://dummy.restapiexample.com/api/v1/employees',true);
    //use this for post required
    

    
   // xhr.onreadystatechange=function(){
       // console.log('ready state is',xhr.readyState);
    //}
    // what to do when response is ready
    xhr.onload=function(){
        if(this.status === 200){
            let obj=JSON.parse(this.responseText);
            console.log(obj);
        }
        else{
            console.error('some error occured');
        }
    }
    //send the request
   		
    xhr.send();
    console.log('we are done fatching employees!');
}
 