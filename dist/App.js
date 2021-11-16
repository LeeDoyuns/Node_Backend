"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const hello = "hello!";
let b = 123;
class App {
    constructor() {
        this.application = (0, express_1.default)();
        this.router();
        this.test();
        this.test3();
    }
    router() {
        var _a;
        (_a = this.application) === null || _a === void 0 ? void 0 : _a.get("/test/:id", (req, res) => {
            res.send("네가 입력한것은 " + req.params.id + " 입니다.");
            let date = new Date();
            console.log(date);
        });
    }
    test() {
        let returnStr = "";
        let array = [1, 2, 4, 6];
        this.application.get("/test2.do", (req, res) => {
            returnStr = "테스트다";
            res.send(returnStr);
        });
        return returnStr;
    }
    test3() {
        let returnStr = "";
        let array = [1, 2, 4, 6];
        this.application.get("/test3.do", (req, res) => {
            res.send(array);
        });
        return returnStr;
    }
}
exports.default = App;
//# sourceMappingURL=App.js.map