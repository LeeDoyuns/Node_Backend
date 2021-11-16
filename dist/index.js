"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __importDefault(require("./App"));
const user_1 = require("./object/user");
const app = new App_1.default().application;
app.listen(3000, () => {
    console.log('서버 시작 3---번 포트');
});
console.log('-=========================================');
let users = new user_1.user();
users.setNames = "똑똑";
users.setAge = 13;
users.inputInfo(users.getName, users.getAge);
users.inputInfo('멍충', 167);
//# sourceMappingURL=index.js.map