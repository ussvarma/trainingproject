let enterOrders=()=>{
    let orderList = new Map();
    j=parseInt(window.prompt("Please Enter number of your order"))
    for(var i=1;i<=j;i++){
    let item=(window.prompt("Enter Food Item"))
    let num=parseInt(window.prompt("Enter the number of items"))
     orderList.set(item,num)
    }
    let text = "Thank you for ordering!";
    confirm(text) 
    console.log(orderList)
    }