//import { BehaviorSubject } from "rxjs/BehaviorSubject";
//import { ReplaySubject } from "rxjs/ReplaySubject";
import { AsyncSubject } from "rxjs/AsyncSubject";
//var subject = new BehaviorSubject('First')
//var subject = new ReplaySubject(30,200)
var subject = new AsyncSubject()
subject.subscribe(
    data => logItem('Observer 1: '+ data),
   // err => logItem(err),
    () => logItem('Observer 1 Completed')
)
var i = 1;
var int = setInterval(() => subject.next(i++), 100);

setTimeout(() => {
    var observer2 = subject.subscribe(
        data => logItem('Observer 2: '+ data)
    )
    subject.complete();
}, 500);


    function logItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
}