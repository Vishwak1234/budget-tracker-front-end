
document.addEventListener("DOMContentLoaded", function () {
    const summary = document.getElementById("summary-data");
    const transactions = document.getElementById("transaction-list");

    summary.innerHTML = "<p>Total Income: $3000</p><p>Total Expense: $1150</p><p>Net Savings: $1850</p>";

    const sampleTransactions = [
        { desc: "Salary", amount: 3000 },
        { desc: "Groceries", amount: -150 },
        { desc: "Rent", amount: -1000 }
    ];

    sampleTransactions.forEach(tx => {
        const li = document.createElement("li");
        li.textContent = `${tx.desc}: $${tx.amount}`;
        transactions.appendChild(li);
    });
});
