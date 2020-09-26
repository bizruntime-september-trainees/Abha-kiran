import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignutilityService {

  constructor(private http:HttpClient) { }

  messageAlert(){
    alert("Thanks for subscribe.")
  }
  // product=[{name:"Laptop",id:"001"},
  //         {name:"Mobile",id:"002"},
  //         {name:"Tv",id:"003"},
  //         {name:"Washing Machine",id:"004"},
//]
url='https://jsonplaceholder.typicode.com/users';
product(): Observable<any>{
  return this.http.get(this.url)

}
//userName=new Subject<any>();
userName=new BehaviorSubject('Abha kiran')
}
