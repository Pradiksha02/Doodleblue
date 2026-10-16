var a;
console.log(a); // undefined
a=10;

let a1;
console.log(a1); // undefined
a =10;

//const b;
//console.log(b); // SyntaxError: Missing initializer in const declaration
//b= 20;

const res = () => {
    console.log("Hi!")
}
console.log(res)
res()


function Account(){
    let balance = 1000
    function deposit(amount){
        balance=balance+amount;
        console.log("BalanceAmount: "+balance)
    }
    return deposit
}
const MyAccount = Account()
MyAccount(500)
MyAccount(700)