const app = async function () {
    let getRes = await axios.get("https://northwind.vercel.app/api/suppliers");
    const insertData = function () {
        let tbody = document.querySelector("tbody");
        getRes.data.forEach(item => {
            tbody.innerHTML +=
                `<tr>
                <th scope="row">${item.id}</th>
                <td>${item.companyName}</td>
                <td>${item.contactName}</td>
                <td>Example</td>
                <td>
                <a id="btn">Details</a>
                <a href="./edit.html" id="btn2">Edit</a>
                <a style="color: red" id="btn3">Delete</a>
                </td>
            </tr>
            `;
        });
    };

    const deleteContent = function () {
        let allDeleteBtns = document.querySelectorAll('#btn3');
        allDeleteBtns.forEach(deleteBtn => {
            deleteBtn.addEventListener('click', async () => {
                let callId = deleteBtn.parentElement.parentElement.children[0].textContent;
                await axios.delete(`https://northwind.vercel.app/api/suppliers/${callId}`);
                onLoadPage();
            });
        });
    };

    const editInput = function () {
        let edit = {
            id: '',
            company: '',
            contact: '',
            country: ''
        };
        let allEditBtns = document.querySelectorAll('#btn2');
        allEditBtns.forEach(editBtn => {
            editBtn.addEventListener('click', () => {
                edit.id = editBtn.parentElement.parentElement.children[0].innerText;
                edit.company = editBtn.parentElement.parentElement.children[1].innerText;
                edit.contact = editBtn.parentElement.parentElement.children[2].innerText;
                edit.country = editBtn.parentElement.parentElement.children[3].innerText;
                sessionStorage.setItem('edit', JSON.stringify(edit));
            });
        });
    };
    const showDetails = function () {
        let getDetail = document.querySelectorAll('#btn');
        getDetail.forEach(detail => {
            detail.addEventListener('click', async function () {
                let getDetail = await axios.get(`https://northwind.vercel.app/api/suppliers/${detail.parentElement.parentElement.children[0].innerText}`);
                let companyN = getDetail.data.companyName;
                let contactN = getDetail.data.contactName;
                let contactT = getDetail.data.contactTitle;
                let object = {
                    company: companyN,
                    contact: contactN,
                    contactT: contactT
                };
                sessionStorage.setItem('details', JSON.stringify(object));
                window.location.href = 'details.html';
            });
        });
    };
    insertData();
    showDetails();
    deleteContent();
    editInput();
};
app();