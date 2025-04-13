

let apple = 30;
let banana = 10;
let orange = 20;
let juice = 45;
 console.log(apple)
 console.log(banana)
 console.log(orange)
 console.log(juice)
 console.log("Subtotal:" + (apple * 3 + banana * 2 + orange * 5 + juice) );
 console.log("Discount:" + -30 );
    console.log("Your total bill is:" + (apple * 3 + banana * 2 + orange * 5 + juice - 30) );



    let itemName = prompt("Enter the item name:");

    let price = Number(prompt("Enter the price of one " + itemName + ":"));

    let quantity = Number(prompt("Enter how many " + itemName + "s you want:"));

    console.log("Item name: " + itemName);
    console.log("Price: " + price);
    console.log("Quantity: " + quantity);
    
    let total = price * quantity;

    console.log("Total cost is: ₹" + total);

    let o = {
        "name": "Akshay",
        "age": "20",
        "job": "webdeveloper",
        "salary" : "20000",
    }
    console.log(o);
    o.salary = "30000";
   