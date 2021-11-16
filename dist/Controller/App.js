"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_1 = require("../VO/User");
const hello = "hello!";
let b = 123;
class App {
    constructor() {
        this.application = (0, express_1.default)();
        this.application.use(express_1.default.json()); //bodyParser
        this.application.use(express_1.default.urlencoded({ extended: false }));
        this.test();
        this.firstPosttest();
        this.secReq();
    }
    test() {
        var _a;
        (_a = this.application) === null || _a === void 0 ? void 0 : _a.get("/test/:id", (req, res) => {
            //res.send("네가 입력한것은 "+req.params.id+" 입니다.");
            res.json({ message: "니가 입력한것은 " + req.params.id + "이다." });
        });
    }
    firstPosttest() {
        this.application.post("/firstPostReq", (req, res) => {
            let { username, age, region } = req.body;
            res.json({ "inpt": req.body });
        });
    }
    secReq() {
        this.application.post("/secReq", (req, res) => {
            let { username, age, region } = req.body;
            var users = new User_1.User();
            let list = [];
            let ages = Number(age);
            users.setAge = ages;
            users.setNames = username;
            list.push(users);
            users = new User_1.User();
            users.inputInfo("두식이", 46);
            list.push(users);
            users = new User_1.User();
            users.inputInfo("삼식이", 42);
            list.push(users);
            res.json({ "result": list });
        });
    }
}
exports.default = App;
