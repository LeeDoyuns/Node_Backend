import App from './Controller/App';

const app = new App().application;
app.listen(3000,()=>{
    console.log('서버 시작 3000번 포트');
});

console.log('-=========================================');
