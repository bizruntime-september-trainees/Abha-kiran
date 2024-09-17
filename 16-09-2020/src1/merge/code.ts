import { Observable } from "rxjs/Observable";
import { merge } from 'rxjs/observable/merge';

var observable = Observable.create((observer:any) => {
    observer.next('Hey guys!')
})

var observable2 = Observable.create((observer:any) => {
    observer.next('How is it going?')
})

// We're using our merge operator here:
var newObs = merge(observable, observable2);

newObs.subscribe((x:any) => logItem(x));


    function logItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
}