// Your code here, reference the instructions if you're unsure how to start
let menu = {
  burger: 5.00,
  fries: 3.50,
  shake: 1.11,
  salad: 4.25,
  pepsi: 1.00,
  order: function (orderPlaced) {
    let orderSplit = orderPlaced.split(", ");
    let sum = 0;
        for (item of orderSplit) {
            if (!menu[item]) {
                console.log(`${item}'s not on the menu`)
            } else {
            sum = sum + menu[item]
        }
    }
    console.log(`$${sum}`);
  }
}
menu.order("burger, fries, shake")
menu.order("fries, salad, coke, pepsi, rootbeer, salsa")
