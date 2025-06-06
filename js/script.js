document.addEventListener('DOMContentLoaded', () => {
    const ucOptions = document.querySelectorAll('#uc-options .grid-item');
    const paymentOptions = document.querySelectorAll('#payment-options .grid-item');
    const buyNowBtn = document.getElementById('buy-now-btn');
    const modal = document.getElementById('confirmation-modal');
    const closeModalBtn = document.querySelector('.close-btn');
    const confirmPurchaseBtn = document.querySelector('.confirm-purchase-btn');
    let selectedUC = null;
    let selectedPayment = null;
    function handleSelection(options, type) {
        options.forEach(option => {
            option.addEventListener('click', () => {
                options.forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');
                if (type === 'uc') {
                    selectedUC = { uc: option.dataset.uc, price: option.dataset.price };
                } else if (type === 'payment') {
                    selectedPayment = { method: option.dataset.payment };
                }
            });
        });
    }
    handleSelection(ucOptions, 'uc');
    handleSelection(paymentOptions, 'payment');
    buyNowBtn.addEventListener('click', () => {
        const playerId = document.getElementById('player-id').value;
        const email = document.getElementById('email').value;
        if (!playerId) { alert('Please enter your Player ID.'); return; }
        if (!selectedUC) { alert('Please select a UC amount.'); return; }
        if (!selectedPayment) { alert('Please select a payment method.'); return; }
        document.getElementById('confirm-player-id').textContent = playerId;
        document.getElementById('confirm-uc').textContent = selectedUC.uc;
        document.getElementById('confirm-price').textContent = selectedUC.price;
        document.getElementById('confirm-payment').textContent = selectedPayment.method;
        modal.style.display = 'flex';
    });
    closeModalBtn.addEventListener('click', () => { modal.style.display = 'none'; });
    window.addEventListener('click', (event) => { if (event.target == modal) { modal.style.display = 'none'; } });
    confirmPurchaseBtn.addEventListener('click', () => {
        alert('Thank you for your purchase! (This is a demo)');
        modal.style.display = 'none';
        window.location.reload();
    });
});
