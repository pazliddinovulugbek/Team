const form = document.getElementById('newsletterForm');
const emailInput = document.getElementById('emailInput');
const agreeCheckbox = document.getElementById('agreeCheckbox');
const toast = document.getElementById('toast');

function showToast(message, bgColor = "#4CAF50") {
    toast.textContent = message;
    toast.style.background = bgColor;
    toast.style.display = "block";
    setTimeout(() => {
        toast.style.display = "none";
    }, 3000); // 3 soniya ko‘rinadi
}

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Forma yuborilishini to‘xtatadi

    if (!emailInput.value) {
        showToast('Email maydoni to‘ldirilishi kerak!', '#f44336'); // qizil xato
        emailInput.focus();
        return;
    }

    if (!agreeCheckbox.checked) {
        showToast('Iltimos, checkboxni belgilang!', '#f44336'); // qizil xato
        agreeCheckbox.focus();
        return;
    }

    showToast('Rahmat! Siz muvaffaqiyatli obuna bo‘ldingiz: ' + emailInput.value, '#4CAF50');
    emailInput.value = '';
    agreeCheckbox.checked = false;
});
