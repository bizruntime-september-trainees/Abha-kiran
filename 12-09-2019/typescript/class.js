var app = /** @class */ (function () {
    function app(name) {
        this.name = "abha kiran";
        this.name = name;
    }
    app.prototype.getName = function () {
        return this.name;
    };
    return app;
}());
//object creation 
var a1 = new app("peter");
console.log(a1.getName());
