//var sum=function(a,b){
  //  return a+b;
//}

//module.exports={
  //  sum
//}

var addItemToList=function(list,newItem){
    return list.concat([newItem]);

}
var removeItemFromList=function(list,index){
    //list.splice(index,1);
    return list.filter(function(listItem,i){
        return i !==index
    })
}
var updateItemFromList=function(list,index,newItem){
    //clone array
    var newList = list.slice();
    //new value add
    newList[index]=newItem
    //new arry return
    return newList;
    }

module.exports={
    addItemToList,
    removeItemFromList,
    updateItemFromList
}