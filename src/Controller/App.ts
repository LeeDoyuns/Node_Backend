import express from "express";
import {User} from "../VO/User";

const hello: string = "hello!";
let b: number=123;



class App{
    public application: express.Application;

    constructor(){
        this.application = express();
        this.application.use(express.json());   //bodyParser
        this.application.use(express.urlencoded({extended:false}));
        this.test();
        this.firstPosttest();
        this.secReq();
    }

    private test():void{
        this.application?.get("/test/:id",(req:express.Request, res:express.Response)=>{
            //res.send("네가 입력한것은 "+req.params.id+" 입니다.");
            res.json({message:"니가 입력한것은 "+req.params.id+"이다."});
        });
    }
    private firstPosttest():void{
        this.application.post("/firstPostReq",(req:express.Request,res:express.Response)=>{
         let {username ,age, region} = req.body;
         res.json({"inpt":req.body});
        });
    }
    private secReq():void{
        this.application.post("/secReq",(req:express.Request,res:express.Response)=>{

            let {username,age,region} = req.body;
            var users = new User();
            let list : Array<User> = [];
            let ages = Number(age);

            users.setAge=ages;
            users.setNames=username;

            list.push(users);

            users = new User();
            users.inputInfo("두식이",46);
            list.push(users);

            users = new User();
            users.inputInfo("삼식이" ,42);
            list.push(users);


            res.json({"result":list});

        });
    }
}


export default App;