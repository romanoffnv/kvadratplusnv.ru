
const htmlSlogan = document.querySelector('nav').attachShadow({mode: 'open'});
htmlSlogan.innerHTML = ` 
    <style>
    // * {border: solid red;}
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
    
    .branding {
        display: flex;
        margin-left: 1em;
        justify-content: flex-start;
        align-items: center;
        width: 30%;
    }
    
    .branding img {
        width: 50px;
        height: 50px;
        margin: 0.2em;
    }
    
    .branding a {
        text-decoration: none;
        color: #000;
        height: 100%;
    }
    .logo-container {
        width: auto;
    }
    .brand-name-container {
        width: 80%;
        padding-left: 1em;
        display: flex;
    }
    .branding a h1 {
        width: 100%;
        height: 60%;
        margin: auto;
        font-size: 1.7em;
        font-weight: 300;
    }
    
    .navi {
        width: 100%;
        margin-top: 10px;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        background-color: #F3F3F3;
        display: flex;
        justify-content: space-between;
    }
    
    .navi ul {
        height: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-between;
    }
    
    .navi ul li {
        list-style-type: none;
        padding: 1em 0;
        font-size: 1.2em;
        
    }
    
    .navi ul li a {
        color: #000;
        text-decoration: none;
        padding: .5em 1.2em;
        transition: all 1s;
    }
    
    .navi ul li a:hover {
        cursor: pointer;
        background-color: #000;
        color: whitesmoke;
    }
    
   
@media only screen and (max-width: 815px) { 
    .navi {
        margin-top: 20px;
        width: 100%;
        height: 140px;
        background-color: #F3F3F3;
        flex-direction: column;
        justify-content: center;
        padding: 0;
    }
    .logo-container {
        width: 30%;
    }
    .brand-name-container {
        width: 70%;
        text-align: center;
    }
   
    .branding {
        width: 50%;
        margin: 0 auto;
        justify-content: space-around;
    }    
}

@media only screen and (max-width: 490px) {
    .navi ul li {
        font-size: 1em;
    }
    
}
@media only screen and (max-width: 415px) {
    .navi ul li {
        font-size: .9em;
    }
    div.branding {
        width: 60%;
    }
}

@media only screen and (max-width: 380px) {
    .navi ul li {
        font-size: .8em;
    }
}

@media only screen and (max-width: 350px) {
    .navi {
        height: fit-content;
    }
    .navi ul li a {
        padding: 0.2em 0.5em;
    }
    div.branding {
        width: 80%;
    }
}
    </style>
    
    <div class = "navi">
        <div class = "branding">
            <a href = "index.html" class = "logo-container">
                <img class = "logo" src = "img/Logo.png" alt = "logo"/>
            </a>
            <a href = "index.html" class = "brand-name-container">
                <h1>КВАДРАТ+</h1>
            </a>
        </div>
        <ul>
            <li><a href = "about.html">О нас</a></li>
            <li><a href = "repairs.html">Ремонт</a></li>
            <li><a href = "services.html">Услуги</a></li>
            <li><a href = "#contacts">Контакты</a></li>
        </ul>            
    </div>
    
`