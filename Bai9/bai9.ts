// let diemHienTai: string = "10";
// let bonus: number = 50;
// let totalScore: number = Number(diemHienTai) + bonus;
// console.log(totalScore);

// let cusst
let customerName: string = "Nguyen Van A";

let orderId: number = 101;
let isPaid: boolean = false;

let userName: any = "Nguyen van a";
// userName=123
console.log(userName.toUpperCase());

//void
function printReceipt(orderId: number): void {
  console.log(`In hoa don ${orderId}`);
}
printReceipt(1);

function tinhTong(a: number, b: number): number {
  return a + b;
}
console.log(tinhTong(4, 5));

let menu: string[] = ["3", "capuchino"];
let score: number[] = [3, 4, 5, 7, 8];

//object
//dang cho object
let coffeeOrder: {
  orderId: number;
  customerName: string;
  isPaid: boolean;
  itemCount: number;
};
coffeeOrder = {
  orderId: 10,
  customerName: "name",
  isPaid: true,
  itemCount: 10,
};

let specialOrder: {
  orderId: number;
  items: string[];
  specialInstruction?: string; //? la cho optional
};
specialOrder = {
  orderId: 10,
  items: ["expresso"],
};

//Khoi tao va khai bao luon
const custumerOrder: {
  orderId: number;
  status: string;
} = {
  orderId: 10,
  status: "success",
};

const storeMenu: {
  id: number;
  name: string;
  price: number;
}[] = [
  { id: 2, name: "Ca phe den", price: 10000 },
  { id: 3, name: "Ca phe den", price: 50000 },
  { id: 4, name: "Ca phe den", price: 80000 },
];

const customOrder: {
  orderId: number;
  items: { name: string; price: number }[];
  status: string;
  note?: string;
} = {
  orderId: 1000,
  items: [],
  status: "pending",
  note: "It da, nhieu ca phe",
};

function calculateOrderTotal(order:{items: {price:number}[]}):number{
let total =0
for(const item of order.items){
    total+=item.price
}
return total;
}

function processPayment(totalAmount:number, method:string, amountGiven:number):string{
if(method === 'card'){
    return `thanh toan thanh cong ${totalAmount} bang the`
}else if(method === 'cash'){
    const change = amountGiven-totalAmount
    if(change<0){
        return `Khach dua thieu ${Math.abs(change)}`
    }
    return `Thanh toan thanh cong voi so tien ${change}`
}
return `Phuong thuc thanh toan khong hop le`
}

const selectedItem = storeMenu[1]
const selectedItem1 = storeMenu[2]
console.log(typeof(selectedItem));


if(selectedItem){
  customOrder.items.push({name:selectedItem.name,price:selectedItem.price})

}
if(selectedItem1){
  customOrder.items.push({name:selectedItem1.name, price:selectedItem1.price})
}

// customOrder.items.push({name:storeMenu[2]!.name,price:storeMenu[2]!.price})

const totalAmount = calculateOrderTotal(customOrder)
console.log(totalAmount);

const paymentResult = processPayment(totalAmount,'card', 0)
console.log(paymentResult);

