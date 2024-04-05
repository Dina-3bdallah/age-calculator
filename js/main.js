// get date input
let userInput = document.getElementById("date");
// max date is today date
userInput.max = new Date().toISOString().split("T")[0];

function calculateAge() {
    let userAge = document.getElementById("age");
    // get user birthdate
    let birthDate = new Date(userInput.value);
    // get the year from user birthdate
    let userYear = birthDate.getFullYear();
    // get today date
    let today = new Date();

    // year of today date
    let todayYear = today.getFullYear();
    // get the difference between years to get user age
    let ageYear;
    ageYear = todayYear - userYear;

    // message
    userAge.innerHTML = `your age is ${ageYear}`
}
