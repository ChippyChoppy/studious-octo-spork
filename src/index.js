/*DOM Elements */
const customerName = document.querySelector("#customer-name")
const customerTotal = document.querySelector("#customer-total")

/* Render Functions */
const renderCustomerTotal = orderObj => {
    console.log(orderObj)
    let totalPurchases = 0
    totalPurchases += orderObj.total
    const li = document.createElement("li")
    li.textContent = `${totalPurchases}`
    customerTotal.append(li)
}

const renderTop10Customers = customerObj => {
        console.log(customerObj)

    customerName.textContent = customerObj.name
    customerObj.orders.forEach(renderCustomerTotal)
}



/* Fetch Functions */

const getOneCustomer = id => {
    fetch(`http://localhost:3000/api/v1/customers`)
        .then(r => r.json())
        .then(customerObj => {
            console.log(customerObj)
            renderTop10Customers(customerObj)
        })
}

/* Initialize */
getOneCustomer(69)