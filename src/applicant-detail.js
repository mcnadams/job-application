const json = window.localStorage.getItem('applicants');
let applicants = [];

if(json) {
    applicants = JSON.parse(json);
}
else {
    window.location = './index.html';
}

const applicant = applicants[applicants.length - 1];

const name = document.getElementById('name');
const city = document.getElementById('city');
const favoriteNumber = document.getElementById('number');
const experience = document.getElementById('experience');
const certified = document.getElementById('certified');
const type = document.getElementById('type');
const message = document.getElementById('message');

name.textContent = applicant.name;
city.textContent = applicant.city;
favoriteNumber.textContent = applicant.faveNumber;
if(applicant.experience === '0') {
    experience.textContent = 'none';
}
else {
    experience.textContent = applicant.experience + ' years';
}
if(applicant.certified) {
    certified.textContent = 'yes';
}
else {
    certified.textContent = 'no';
}
if(applicant.cuddles.length === 0) {
    type.textContent = 'none specified';
}
else {
    for(let i = 0; i < applicant.cuddles.length - 1; i++) {
        type.textContent += applicant.cuddles[i] + ', ';
    }
    type.textContent += applicant.cuddles[applicant.cuddles.length - 1];
}

const msg = 'Thank you for applying, ' + applicant.name + '. If we are interested, you will be hearing from the Human Resources Department within 3 business days.';
message.textContent = msg;