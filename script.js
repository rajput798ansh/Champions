let balance = 0;
let expenses = [];

document.getElementById('expenseForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const desc = document.getElementById('expenseDesc').value;
  const amount = parseFloat(document.getElementById('expenseAmount').value);
  const category = document.getElementById('expenseCategory').value;

  if (desc && amount) {
    const expense = { desc, amount, category };
    expenses.push(expense);
    balance += amount;
    updateUI();
  }
});

function updateUI() {
  document.getElementById('balance').innerText = `$${balance.toFixed(2)}`;
  const list = document.getElementById('expenseList');
  list.innerHTML = '';
  expenses.forEach((expense, index) => {
    const item = document.createElement('li');
    item.innerText = `${expense.desc} - $${expense.amount.toFixed(2)} (${expense.category})`;
    list.appendChild(item);
  });
  updateStats();
}

function updateStats() {
  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const averageExpense = totalExpenses / expenses.length;
  document.getElementById('totalExpenses').innerText = `$${totalExpenses.toFixed(2)}`;
  document.getElementById('averageExpense').innerText = `$${averageExpense.toFixed(2)}`;
}