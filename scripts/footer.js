
const a = document.querySelector('footer').attachShadow({mode: 'open'});
a.innerHTML = ` 
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
/* footer section */
.footer-container {
    width: 100%;
    background-color: #000;
    font-family: 'Roboto', sans-serif;
    padding: 2em 0;
}
.footerMain {
    width: 90%;
    margin: 0 auto;
    background-color: #000;
    display: flex;
    justify-content: space-around;
}
.social {
    width: 100%/4;
}
.social p { 
    text-align: center;
    margin: 0.6em auto;
}
.social a {
    width: 100%;
    display: block;
    text-align: center;
    margin: 0.6em auto;
    color: #999;
}

.networks {
    width: 200px;
    display: flex;
    justify-content: space-around;
    align-content: flex-start;
    font-size: 2.5em;   
}
.networks a {
    margin-top: 0;
    color: whitesmoke;
}
.fixes {
    width: 100%/4;
}
.services {
    width: 100%/4;
}
.group {
    width: 100%/4;
}

.footerH3 {
    font-weight: 600;
    color: rgb(206, 206, 206);
    margin-top: 0;
}
.footerMain ul {
    padding: 0;
}
.footerMain ul li {
    list-style-type: none;
    margin: .5em 0;
}
.footerMain ul li a {
    color: #999;
    text-decoration: none;
}

.paywaysH3 {
    margin-top: 3em;
    
}
.payways {
    width: 200px;
    margin-top: .5em;
    font-size: 2.5em;
    color: whitesmoke;
    display: flex;
    justify-content: space-between;
}
.copyright {
    color: #999;
    text-align: center;
    font-size: 0.8em;
    margin: 2em auto 1em auto;
}

@media only screen and (max-width: 880px) {
    .services {
        display: none;
    }
    .copyright {
        font-size: .9em;
    }
}
@media only screen and (max-width: 700px) {
    .fixes {
        display: none;
    }
    .copyright {
        font-size: .8em;
    }
}
@media only screen and (max-width: 550px) {
    .fixes {
        display: none;
    }
    .copyright {
        font-size: .8em;
    }
    .footerMain {
        flex-direction: column;
        align-content: center;
    }
    .networks {
        width: 80%;
        margin: auto;
    }
    .group {
        width: 90%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    
    .footerH3 {
        display: none;
        text-align: center;
    }
    .footerMain ul li {
        display: none;
        margin: 1em auto;
        
    }
    .footerMain ul li a {
        text-decoration: underline;
    }
    
    .payways {
        margin-top: 1em;
    }
}

</style>
<link
                                rel="stylesheet"
                                href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
                                integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
                                crossorigin="anonymous"
                            />
<div class = "footer-container">
    <div class = "footerMain">
        <div class = "social" id  = "contacts">
            <div class = "networks">
                <a href="https://www.instagram.com/kvadratnv_plus/" target = "_blank" rel = "nofollow noopener noreferrer"><i class="fab fa-instagram"></i></a>
                <a href="https://vk.com/id684303543" target = "_blank" rel = "nofollow noopener noreferrer"><i class="fab fa-vk"></i>   </a>
                <a href="https://api.whatsapp.com/send?phone=+79028548538&text=Здравствуйте!"><i class="fab fa-whatsapp-square"></i></a>
            </div>
            <p>Контакты:</p>
            <a href="mailto:kvadratplusnv@gmail.com"><i class="fas fa-envelope"></i> kvadratplusnv@gmail.com</a>
            <a href="tel:+79028548538"><i class="fas fa-phone-square"></i> +7(902)854-85-38</a>
            
        </div>
        <div class = "fixes">
            <h3 class = "footerH3">Неисправности</h3>
            <ul class="linkList">
                <li><a href = "services.html#noClose">Не закрывается</a></li>
                <li><a href = "services.html#windBlow">Продувает</a></li>
                <li><a href = "services.html#fogging">Запотевает</a></li>
                <li><a href = "services.html#broken">Разбито</a></li>
                <li><a href = "services.html#other">Другое...</a></li>
            </ul>
        </div>
        <div class = "services">
            <h3 class = "footerH3">Услуги</h3>
            <ul class="linkList">
                <li><a href = "services.html#balcWinterizing">Утепление</a></li>
                <li><a href = "services.html#adjustin">Регулировка</a></li>
                <li><a href = "services.html#unjamming">Разблокировка</a></li>
                <li><a href = "services.html#lights">Освещение</a></li>
                <li><a href = "services.html#rubberChangeOut">Замена резинок</a></li>
                <li><a href = "services.html#servicePrice">Другое...</a></li>
            </ul>
        </div>
        <div class = "group">
            <div class = "aboutUs">
                <h3 class = "footerH3">О нас</h3>
                <ul class="servicesList">
                    <li><a href = "services.html">Услуги и цены</a></li>
                </ul>
            </div>
            <div class = "payment">
                <h3 class = "footerH3 paywaysH3">Способы оплаты</h3>
                <div class = "payways">
                    <i class="fab fa-cc-visa"></i>
                    <i class="fab fa-cc-mastercard"></i>
                    <i class="fas fa-money-bill-alt"></i>
                </div>
            </div>
        </div>
    </div>
    <p class = "copyright">&copy КвадратПлюс 2021 | Ремонт окон и утепление балконов г. Нижневартовск</p>
</div>


    
`