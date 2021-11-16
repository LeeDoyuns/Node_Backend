import App from './App';
import{user} from './object/user';

const app = new App().application;
app.listen(3000,()=>{
    console.log('서버 시작 3000번 포트');
});

console.log('-=========================================');

let users = new user();

users.setNames="똑똑";
users.setAge=13;


users.inputInfo(users.getName,users.getAge);

users.inputInfo('멍충',167);