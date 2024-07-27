document.addEventListener('DOMContentLoaded', () => {
    
    return fetch( "https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json")
        .then(response => response.json())
        .then(data => {
            displayBurgers(data);
        })
        .catch(error => console.error('Error:', error));
});

function displayBurgers(foodItems) {
    const container = document.querySelector('.food-container');
    console.log(foodItems);
    container.innerHTML = ''; // Clear any existing content

    foodItems.forEach((item) => {
        console.log(item.imgSrc);
        const burgerDiv = document.createElement('div');
        burgerDiv.classList.add('burger');

        const burgerImageDiv = document.createElement('div');
        burgerImageDiv.classList.add('burger-image');
        burgerImageDiv.style.backgroundImage = `url('${item.imgSrc}')`; 

        const infoDiv = document.createElement('div');
        infoDiv.classList.add('info');

        const nameParagraph = document.createElement('p');
        nameParagraph.textContent = item.name;

        const price = document.createElement('p');
        price.style.marginLeft="10px"
        price.textContent = "$"+item.price;

        const plusIcon = document.createElement('i');
        plusIcon.classList.add('bx', 'bx-plus');
        plusIcon.style.color = '#fffbfb';

        infoDiv.append(nameParagraph);
        infoDiv.append(price);
        infoDiv.append(plusIcon);

        burgerDiv.append(burgerImageDiv);
        burgerDiv.append(infoDiv);

        container.append(burgerDiv);
    });
}