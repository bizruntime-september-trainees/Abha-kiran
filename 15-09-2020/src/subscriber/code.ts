import { Observable } from 'rxjs';
import 'rxjs/add/operator/share';
var observable = Observable.create((observer:any) => {
    try{
    observer.next('Hello World!');
    observer.next('Hello Again!');
    setInterval(() => {
        observer.next('I am good')
    }, 2000)
    }catch(err){
        observer.error(err);
        
    }
}).share();
 var observer =observable.subscribe(
    (x:any) => logItem(x),
    (error: any) => logItem ('Error: ' + error),
    () => logItem('Completed')
);


setTimeout(() => {
    var observer2=observable.subscribe(
        (x:any) => logItem('subscriber2:'+x)
    )
}, 1000);
function logItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
}