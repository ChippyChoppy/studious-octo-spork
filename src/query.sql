/* --- TOP TEN CUSTOMERS --- */
SELECT order.customer_id,
    customer.name,
    sum(order.total) as customer_total
FROM Order
    inner join Customer on Order.customer_id = Customer.customer_id
group by order.customer_id,
    customer.name
order by customer_total DESC
LIMIT 10

/* --- TOP TEN ITEMS --- */
SELECT orderItem.item_id,
    sum(orderItem.quantity) as item_total
FROM OrderItem
    inner join Customer on Order.customer_id = Customer.customer_id
group by orderItem.item_id
order by item_total DESC
LIMIT 10