import { Observable } from 'rxjs';
import { fromEvent } from 'rxjs/observable/fromEvent';

var observable = fromEvent(document, 'mousemove')

setTimeout(() => {
    var subscription = observable.subscribe(
        (x:any) => logItem(x)
    )
},2000);

    function logItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
}