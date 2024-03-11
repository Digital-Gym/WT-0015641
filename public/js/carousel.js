document.addEventListener("DOMContentLoaded", function () {
    const dreamsContainer = document.querySelector('.dreams');
    const outputContainer = document.querySelector('.output');

    // Генерация карточек
    function generateCards(cards) {
        dreamsContainer.innerHTML = '';

        cards.forEach((card, index) => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');
            cardElement.innerHTML = `
                <div class="wrapper">
                    <div class="img-wrapper">
                        <img class="img" src="images/${card.img}" alt="${card.name}">
                    </div>
                    <div class="info">
                        <p class='name'>${card.name}</p>
                        <p class='price'>${card.price}$</p>
                    </div>
                </div>
            `;

            cardElement.addEventListener('click', () => {
                // При клике на карточку можно изменять контент в div.output
                outputContainer.innerHTML = `
                    <p>Initial: ${card.price}</p>
                    <p>How many plov: ${card.price / 2.40} (${card.price*12496.40} сум)</p>
                `;
            });

            dreamsContainer.appendChild(cardElement);
        });

        // Инициализация Slick Carousel
        $('.dreams').slick({
            slidesToShow: 5, // Количество отображаемых слайдов
            slidesToScroll: 1, // Количество прокручиваемых слайдов
            prevArrow: '<button type="button" class="slick-prev">prev</button>',
            nextArrow: '<button type="button" class="slick-next">next</button>',
            autoplay: true,
            autoplaySpeed: 4000,
        });
        
    }

    // Используем fetch для получения данных
    fetch('/api/cards') // Путь к вашему маршруту, обрабатывающему запрос на получение данных
        .then(response => response.json())
        .then(cards => generateCards(cards))
        .catch(error => console.error('Error fetching data:', error));
});