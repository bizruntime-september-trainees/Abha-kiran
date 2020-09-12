var util = require('./util');
//var deepFreeze = require("deep-Freeze")

//test("add two number",function(){
    //var result=util.sum(2,4);
    //var expected=6;
  //  expect(result).toBe(expected)
//})
test("add Item to a list",function(){
    var jslibs=['React','Mobx'];
    //deepFreeze(jslibs);
    var result=util.addItemToList(jslibs,'jest');
    var expected=['React','Mobx','jest'];
    expect(result).toEqual(expected)
})

test("remove Item from a list",function(){
    var jslibs=['React','Mobx'];
    //deepFreeze(jslibs);
    var result=util.removeItemFromList(jslibs,1);
    var expected=['React'];
    expect(result).toEqual(expected)
})
test("update Item from a list",function(){
    var jslibs=['React','Mobx'];
    //deepFreeze(jslibs);
    var result=util.updateItemFromList(jslibs,1,'Redux');
    var expected=['React','Redux'];
    expect(result).toEqual(expected)
})

