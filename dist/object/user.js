"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
class user {
    /*
    constructor(username:string, age:number ){
        this._userName = username;
        this._age = age;

    }*/
    constructor() {
        this._userName = "";
        this._age = 0;
    }
    get getName() {
        return this._userName;
    }
    set setNames(name) {
        console.log('setName');
        this._userName = name;
    }
    get getAge() {
        return this._age;
    }
    set setAge(age) {
        console.log('setAge');
        this._age = age;
    }
    inputInfo(username, age) {
        console.log(username + "은 " + age + "살이래요.");
        this._userName = username;
        this._age = age;
    }
}
exports.user = user;
//# sourceMappingURL=user.js.map