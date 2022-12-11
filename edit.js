const editAdmin = function () {
    let companyEditPanel = document.querySelector('#company');
    let contactEditPanel = document.querySelector('#contact');
    let countryEditPanel = document.querySelector('#country');
    let submitEditButton = document.querySelector('#add_btn');
    let getItem = JSON.parse(sessionStorage.getItem('edit'));
    const itemIntoInput = function () {
        companyEditPanel.value = getItem.company;
        contactEditPanel.value = getItem.contact;
        countryEditPanel.value = getItem.country;
    };
    submitEditButton.addEventListener("click", function (event) {
        event.preventDefault();
        if (companyEditPanel.value.trim() == '' || contactEditPanel.value.trim() == '' || countryEditPanel.value.trim() == '') {
            alert('Try again');
            return;
        }
        axios.put(`https://northwind.vercel.app/api/suppliers/${getItem.id}`, {
            companyName: companyEditPanel.value,
            contactName: contactEditPanel.value,
            address: {
                country: countryEditPanel.value
            }
        })
    });
    itemIntoInput();
}

editAdmin();