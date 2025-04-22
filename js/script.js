// Инициализируем EmailJS с твоим user ID
emailjs.init("xDo8ADry6j7sGlYBN");

let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000);
showSlide(currentSlide);

// Переводы языков
const translations = {
    ru: {
        heroTitle: "Создаю современные сайты",
        orderBtn: "Заказать сайт",
        learnMore: "БОЛЬШЕ",
        aboutUs: "О компании",
        contacts: "Контакты",
        aboutMe: "Обо мне",
        aboutText1: "Я создаю сайты высшего качества с вниманием к каждой детали...",
        aboutText2: "Все сайты, которые я разрабатываю, проходят тщательное тестирование...",
        aboutText3: "Профессионализм, безопасность и качество — вот что вы получите, заказав сайт у меня.",
        contactUs: "Связаться",
        home: "Главная", // Добавляем перевод для Home
    },
    en: {
        heroTitle: "Creating modern websites",
        orderBtn: "Order a Website",
        learnMore: "LEARN MORE",
        aboutUs: "About us",
        contacts: "Contacts",
        aboutMe: "About me",
        aboutText1: "I create high-quality websites with attention to every detail...",
        aboutText2: "All the websites I develop undergo thorough testing...",
        aboutText3: "Professionalism, security and quality - that's what you will get when you order a website from me.",
        contactUs: "Contact",
        home: "Home", // Перевод для Home
    },
    am: {
        heroTitle: "Ստեղծում եմ ժամանակակից կայքեր",
        orderBtn: "Պատվիրել կայք",
        learnMore: "ԱՎԵԼԻՆ",
        aboutUs: "Մեր մասին",
        contacts: "Կապ",
        aboutMe: "Իմ մասին",
        aboutText1: "Ես ստեղծում եմ բարձր որակի կայքեր, ուշադրություն դարձնելով յուրաքանչյուր մանրուքին...",
        aboutText2: "Իմ կողմից մշակած բոլոր կայքերը խիստ փորձարկվում են տարբեր սարքերում...",
        aboutText3: "Ամենալավ արդյունքը և անվտանգությունը՝ այն, ինչ դուք կստանաք՝ պատվիրելով կայք ինձանից",
        contactUs: "Կապվել",
        home: "Գլխավոր", // Перевод для Home на армянский
    }
};



function setLanguage(lang) {
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        el.textContent = translations[lang][key];
    });
}

document.querySelector('.flags img[alt="RU"]').onclick = () => setLanguage('ru');
document.querySelector('.flags img[alt="US"]').onclick = () => setLanguage('en');
document.querySelector('.flags img[alt="AM"]').onclick = () => setLanguage('am');

// Открытие попапа
function openPopup() {
    document.getElementById('orderPopup').style.display = 'flex';
}

// Закрытие попапа
function closePopup() {
    document.getElementById('orderPopup').style.display = 'none';
}

// Отправка заказа через EmailJS
// Функция для отправки email
function submitOrder(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    // Подготовка данных для отправки
    let templateParams = {
        to_email: 'sam.pogosyan.2009@gmail.com', // Твой email для получения заказов
        from_name: name, // Имя клиента
        from_email: email, // Email клиента
    };


    // Отправляем email через EmailJS
    emailjs.send('service_fh6e9sj', 'template_obmghnl', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response);
            alert("Сообщение отправлено! Мы свяжемся с вами.");
        }, function (error) {
            console.log('FAILED...', error);
            alert("Произошла ошибка при отправке. Попробуйте снова.");
        });
}

// Обработчик формы отправки
document.getElementById('orderForm').addEventListener('submit', submitOrder);

function toggleMenu() {
    document.querySelector('.main-menu').classList.toggle('open');
}

function toggleFlags() {
    const dropdown = document.getElementById('dropdown-flags');
    if (dropdown.style.display === 'flex') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'flex';
    }
}

// Функция переключения языка



