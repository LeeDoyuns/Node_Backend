"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
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
        this._userName = name;
    }
    get getAge() {
        return this._age;
    }
    set setAge(age) {
        this._age = age;
    }
    inputInfo(username, age) {
        this._userName = username;
        this._age = age;
    }
}
exports.User = User;
