//callback definition - callback Hell is a situation where callback are nested inside callbacks, making code hard to read , understand , and maintain.

//real world scenario -  1.get user 2. get user orders 3. get order details 4. Process payment
//Each step depeds on previous one 
//callback hell code -
function getUser(callback){
    setTimeout(() => {
        console.log("User fetched");
       callback({id: 1, name: "Rahul"});

    },1000);
}

function getOrder(userId , callback){
    setTimeout(() =>{
        console.log("orders fetched");
       callback(["order1", "order2"]);

    },1000);
}
function getOrderDetails(order, callback){
    setTimeout(() => {
        console.log("Order details fetched");
        callback({order : order, price: 500});

    },1000)
}

    function processPayment(details , callback){
        setTimeout(() => {
            console.log("Payment done");
            callback("Success");
        },1000)
    }
//CALLBACK HELL START HERE
    getUser((user) => {
    getOrder(user.id, (orders) => {
        getOrderDetails(orders[0], (details) => {
            processPayment(details , (result) => {
                console.log("Final Result:" , result);
            });
        });
    });
    });