import express from "express";

const hello: string = "hello!";
let b: number=123;



class App{
    public application: express.Application;

    constructor(){
        this.application = express();
        this.router();
        this.test();
        this.test3();
    }

    private router():void{
        this.application?.get("/test/:id",(req:express.Request, res:express.Response)=>{
            res.send("네가 입력한것은 "+req.params.id+" 입니다."); 
        });
    }

    private test(): string{
        let returnStr: string = "";
        let array:Array<number> = [1,2,4,6];
        this.application.get("/test2.do",(req:express.Request,res:express.Response)=>{
            returnStr = "테스트다";
            res.send(returnStr);
        });
        return returnStr;
    }

    private test3(): string{
        let returnStr: string = "";
        let array:Array<number> = [1,2,4,6];
        this.application.get("/test3.do",(req:express.Request,res:express.Response)=>{
            
            res.send(array);
        });
        return returnStr;
    }
}


export default App;