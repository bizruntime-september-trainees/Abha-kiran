var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UsersUtils;
(function (UsersUtils) {
    var parent = /** @class */ (function () {
        function parent() {
        }
        parent.prototype.getName = function () {
            return this.name = name;
        };
        return parent;
    }());
    UsersUtils.parent = parent;
})(UsersUtils || (UsersUtils = {}));
/// <reference path="./namespace1.ts"/>
var UsersUtils;
(function (UsersUtils) {
    var Users = /** @class */ (function (_super) {
        __extends(Users, _super);
        function Users() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Users.prototype.getName = function () {
            return this.name;
        };
        return Users;
    }(UsersUtils.parent));
    UsersUtils.Users = Users;
})(UsersUtils || (UsersUtils = {}));
var u1 = new UsersUtils.Users();
u1.setName("Abha kiran");
console.log(u1.getName());
