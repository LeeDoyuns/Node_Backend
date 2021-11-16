"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __importDefault(require("./Controller/App"));
const app = new App_1.default().application;
app.listen(3000, () => {
    console.log('서버 시작 3000번 포트');
});
console.log('-=========================================');
