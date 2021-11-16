



class user{
    
    private _userName:string;
    private _age:number;

    /*
    constructor(username:string, age:number ){
        this._userName = username;
        this._age = age;

    }*/
    constructor(){
        this._userName = "";
        this._age = 0;
    }

    get getName(){
        return this._userName;
    }
    set setNames(name:string){
        console.log('setName');
        this._userName=name;
    }

    get getAge(){
        return this._age;
    }
    set setAge(age:number){
        console.log('setAge');
        this._age=age;
    }



    inputInfo(username:string, age:number){
        console.log(username+"은 "+age+"살이래요.");
        this._userName = username;
        this._age = age;
    }

    
}

export {user};