import { Subject } from "rxjs/Subject";

var subject = new Subject()
var subject = new Subject()

subject.subscribe(
    data => logItem('Observer 1: '+ data),
    err => logItem(err),
    () => logItem('Observer 1 Completed')
)
subject.next('The first thing has been sent')
var observer2 = subject.subscribe(
    data => logItem('Observer 2: '+ data)
)
subject.next('The second thing has been sent')
subject.next('A third thing has been sent')

observer2.unsubscribe();

subject.next('A final thing has been sent')

    function logItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
}