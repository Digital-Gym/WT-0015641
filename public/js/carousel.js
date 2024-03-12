document.addEventListener("DOMContentLoaded", function () {
    const dreamsContainer = document.querySelector('.dreams');
    const outputContainer = document.querySelector('.output');

    // Card generation start
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
                // output html 
                outputContainer.innerHTML = `
                    <p>In order to afford <b>${card.name}</b>, you need to sacrifice
                        <div class="plov-counter">
                            <img class="iconcha" src="images/plov-icon.png" alt="plov-icon">
                            <p>x${Math.round(card.price / 2.40)} servings of delicious pilaf</p>
                        </div>
                    </p>
                    <br>
                    <p>(Assuming that 1 serving costs 30.000 sum or 2.40$)</p>
                `;
                outputContainer.scrollIntoView({ behavior: 'smooth' });
            });

            dreamsContainer.appendChild(cardElement);
        });

        // slick carousel init
        // check here: https://github.com/kenwheeler/slick/
        $('.dreams').slick({
            slidesToShow: 1, 
            slidesToScroll: 1,
            prevArrow: '<button type="button" class="slick-prev">prev</button>',
            nextArrow: '<button type="button" class="slick-next">next</button>',
            autoplay: true,
            mobileFirst:true,
            autoplaySpeed: 4000,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        });
        
    }

    // fetch data using fetch
    fetch('/api/cards') // bro uses rest
        .then(response => response.json())
        .then(cards => generateCards(cards))
        .catch(error => console.error('Error fetching data:', error));
});