document.getElementById('generateTips').addEventListener('click', () => {
    const amount = parseFloat(document.getElementById('purchaseAmount').value);
    const tipsDiv = document.getElementById('tips');
    tipsDiv.innerHTML = ''; // Clear previous tips

    if (!isNaN(amount)) {
        let tips = generateSavingsTips(amount);
        tips.forEach(tip => {
            const tipElement = document.createElement('p');
            tipElement.textContent = tip;
            tipsDiv.appendChild(tipElement);
        });
    } else {
        tipsDiv.textContent = 'Please enter a valid amount.';
    }
});

function generateSavingsTips(amount) {
    let tips = [];

    if (amount > 100) {
        tips.push('Consider waiting a day or two before making the purchase to see if you still need it.');
    }
    if (amount > 50) {
       tips.push('Check for coupons or discounts online before buying.');
    }

    if (amount > 200) {
        tips.push('Compare prices from multiple retailers to ensure you\'re getting the best deal.');
    }

    if (amount > 500) {
        tips.push('Ask yourself if this purchase aligns with your long-term financial goals.');
    }

    if(amount > 1000){
        tips.push('Consider if you can buy a cheaper option of the same product.');
    }

    tips.push('Review your budget to see if this purchase fits within your spending plan.');

    return tips;
}