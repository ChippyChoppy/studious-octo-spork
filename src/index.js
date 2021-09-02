// /*DOM Elements */
// const customerName = document.querySelector("#customer-name")
// const customerTotal = document.querySelector("#customer-total")

// /* Render Functions */
// const renderCustomerTotal = orderObj => {
//     console.log(orderObj)
//     let totalPurchases = 0
//     totalPurchases += orderObj.total
//     const li = document.createElement("li")
//     li.textContent = `${totalPurchases}`
//     customerTotal.append(li)
// }

// console.log(customer.order)

// const renderTop10Customers = customerArray => {
//     console.log(customerArray[1])
//     customerArray.forEach((customer) => { 
//         const li = document.createElement("li")
//         li.textContent = customer.order
//         customerName.append(li)
//         // customerArray.orders.forEach(renderCustomerTotal)
//     })
// }



// /* Fetch Functions */

// const getOneCustomer = () => {
//     fetch(`http://localhost:3000/api/v1/customers`)
//         .then(r => r.json())
//         .then(customerArray => {
//             console.log(customerArray)
//             renderTop10Customers(customerArray)
//         })
// }

// /* Initialize */
// getOneCustomer(69)

const customerOrders = [
    {
        custId: 1,
        name: 'bob',
        email: 'email@email.com',
        active: true,
        order: [
            {
                orderId: 1,
                custId: 1,
                orderDate: 'January 1, 1990',
                total: 99.99,
                orderItem: [
                    {
                        orderItemId: 1,
                        orderId: 1,
                        itemId: 1,
                        quantity: 2,
                        price: 33.34,
                        tax: 2.01
                    },
                    {
                        orderItemId: 2,
                        orderId: 1,
                        itemId: 2,
                        quantity: 1,
                        price: 15.00,
                        tax: 1.00
                    },
                    {
                        orderItem: 3,
                        orderItem: 1,
                        itemId: 3,
                        quantity: 1,
                        price: 15.00,
                        tax: 0.30
                    }
                ]
            }
        ]
    },
    {
        custId: 2,
        name: 'bobby',
        email: 'email1@email.com',
        active: true,
        order: [
            {
                orderId: 2,
                custId: 2,
                orderDate: 'January 2, 2990',
                total: 16.25,
                orderItem: [
                    {
                        orderItemId: 4,
                        orderId: 2,
                        itemId: 4,
                        quantity: 1,
                        price: 4.10,
                        tax: 0.65
                    },
                    {
                        orderItemId: 5,
                        orderId: 2,
                        itemId: 5,
                        quantity: 2,
                        price: 3.50,
                        tax: 0.50
                    },
                    {
                        orderItem: 6,
                        orderId: 2,
                        itemId: 6,
                        quantity: 1,
                        price: 3.25,
                        tax: 0.25
                    }
                ]
            }
        ]
    }
]

console.log(customerOrders[0].order[0].total)

let onePersonsOrders = customerOrders[0].order

console.log(onePersonsOrders)