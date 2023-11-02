let elForm = document.querySelector('.js-form');
let elInput = document.querySelector('.js-input');
let elText = document.querySelector('.js-text');
let elSelect = document.querySelector('.js-select');
let elRangeOne = document.querySelector('.js-range1');
let elRangeTwo = document.querySelector('.js-range2');
let elList = document.querySelector('.list');

function render(array) {
    elList.innerHTML = null;
    for (let i = 0; i < array.length; i++) {
        let elItem = document.createElement('li');
        let elFirstName = document.createElement('p');
        let elLastName = document.createElement('p');
        let elGender = document.createElement('p');
        let elCountry = document.createElement('p');
        let elPrice = document.createElement('p');
        
        elFirstName.textContent = `First Name: ${array[i].first_name}`
        elLastName.textContent = `Last Name: ${array[i].last_name}`
        elGender.textContent = `Gender: ${array[i].gender}`
        elCountry.textContent = `Country: ${array[i].country}`
        elPrice.textContent = `Money: $${array[i].money}`
        elItem.append(elFirstName, elLastName, elGender, elCountry,elPrice);
        elList.appendChild(elItem);
    }
}
render(users);


elSelect.addEventListener("change", (evt) => {
})

elForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    let inputValue = elInput.value.trim();
    
    let filteredUser = users.filter(item => item.gender == elSelect.value);
    const filteredCountries = users.filter((item)=> item.country.toLowerCase() == inputValue.toLowerCase());
    const filteredMoney = users.filter((item) => item.money >= +elRangeOne.value && item.money <= +elRangeTwo.value)
    
    if(filteredCountries && filteredUser) {
        render(filteredUser);   
        render(filteredCountries);
        // return render(filteredCountries),render(filteredUser) 
    }
    else if(filteredUser) {
        render(filteredUser)
    }
    else if(filteredMoney) {
        render(filteredMoney)
    }
    // else if(filteredCountries && filteredMoney){
    //     render(filteredCountries);
    // }
    // else if(filteredCountries && filteredMoney) {
    //     render(filteredMoney);    
    // }
    
    
    
    
});


