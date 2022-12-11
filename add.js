const addAdminPanel = function () {
    let companyAdminPInput = document.querySelector('#company');
    let contactAdminPInput = document.querySelector('#contact');
    let countryAdminPInput = document.querySelector('#country');
    let submitButton = document.querySelector('#add_btn');
    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        if (companyAdminPInput.value.trim() == '' || contactAdminPInput.value.trim() == '' || countryAdminPInput.value.trim() == '') {
            alert('Try again');
            return;
        }
        axios.post(`https://northwind.vercel.app/api/suppliers`, {
            companyName: companyAdminPInput.value,
            contactName: contactAdminPInput.value,
            address: {
                country: countryAdminPInput.value
            }
        });
    });
};
addAdminPanel();