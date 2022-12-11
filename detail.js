const detail = document.querySelector('.detail');
let getItemD = JSON.parse(sessionStorage.getItem('details'));
detail.innerHTML = `company: ${getItemD.company} <br>
contact: ${getItemD.contact} <br>
title: ${getItemD.contactT}`;