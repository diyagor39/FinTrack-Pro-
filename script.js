const ctx = document.getElementById('budgetChart');

new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [
            'Entertainment',
            'Bills',
            'Shopping',
            'Food'
        ],
        datasets: [{
            data: [200, 500, 300, 400]
        }]
    },
    options: {
        responsive: true
    }
});
document.querySelectorAll(".pot-box button").forEach(button => {
    button.addEventListener("click", () => {
        alert("Money Added Successfully!");
    });
});

const budgetBtn = document.querySelector(".add-btn");

if (budgetBtn) {
    budgetBtn.addEventListener("click", () => {
        alert("Add Budget Clicked!");
    });
}