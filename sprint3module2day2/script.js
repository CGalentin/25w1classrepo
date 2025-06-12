const store = {
	name: "Michael's Shop",
	orders: [
		{ id: 1001, customer: "Alice", total: 25, status: "delivered" },
		{ id: 1002, customer: "Bob", total: 75, status: "pending" },
		{ id: 1003, customer: "Charlie", total: 120, status: "delivered" },
		{ id: 1004, customer: "Dana", total: 45, status: "canceled" },
		{ id: 1005, customer: "Eli", total: 60, status: "delivered" },
		{ id: 1006, customer: "Fiona", total: 30, status: "canceled" },
		{ id: 1007, customer: "George", total: 15, status: "delivered" },
		{ id: 1008, customer: "Hannah", total: 90, status: "pending" },
		{ id: 1009, customer: "Ivy", total: 200, status: "delivered" },
		{ id: 1010, customer: "Jack", total: 5, status: "canceled" },
	],
};

console.log(store);
//forEach Examples
store.orders.forEach((order) => {
	console.log(order.customer);
});

store.orders.forEach((order) => {
	console.log(
		`Customer: ${order.customer} | Order ID: #${order.id} | Total: $${order.total}`
	);
});

store.orders.forEach((order) => {
	const delivered = order.status === "delivered" ? "Yes" : "No";
	console.log(`Order #${order.id} - Delivered? ${delivered}`);
});

//map() Examples
const customerList = store.orders.map((order) => order.customer);
//console.log(`Customer List: ${customerList}`);
console.log("Customer List: ", customerList);

const receipts = store.orders.map((order) => {
	return `Receipt - ${order.customer}: $${order.total}`;
});

console.log("Receipts: ", receipts);

//Dashboard
const dashBoardItems = store.orders.map((order) => {
	return {
		customer: order.customer,
		total: `$${order.total}`,
		status: order.status === "Delivered",
	};
});

console.log("Dashboard Items:", dashBoardItems);

//filter() Examples

const deliveredOrders = store.orders.filter(
	(order) => order.status === "delivered"
);
console.log("Delivered Items:", deliveredOrders);

const highRollers = store.orders.filter((order) => order.total >= 100);
console.log("Big Spenders:", highRollers);

const activeOrders = store.orders.filter(
	(order) => order.status !== "canceled"
);
console.log("Active Orders", activeOrders);

const numbersArray = [11,22,40,9,7,32,7,63];
let count = 0;

numbersArray.forEach((num) => {
    if (num %2 == 0) {
        count++
    }
})
console.log(`There are ${count} even numbers in the array`)

const lowerCaseStrings = ["hello", "world", "javascript", "coding"]
const upperCaseStrings = [];

lowerCaseStrings.forEach((string) => {
    const uppercase = string.toUpperCase();
    upperCaseStrings.push(uppercase);
})

console.log(upperCaseStrings)