class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
 
class Calculator {        
    add(a:number,b:number) {
        return a+b;
    }
     
    sub(a:number,b:number) {
        return a-b;
    }
}
export {Greeter,Calculator}