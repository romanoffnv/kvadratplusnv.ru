const priceCalc = document.createElement('template');
priceCalc.innerHTML = `
    <style>
        /*Price calc section*/
        
        .priceCalc-container {
            background-color: white;
            width: 90%;
            height: fit-content;
            margin: 0 auto;
            padding: 2.5em 0;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
        }
        .group-container {
            width: 50%;
            height: 100%;
            
        }
       .left-group {
           width:  65%;
       } 
       .pcalcText h3 {
           font-size: 2em;
           font-weight: 300;
       }
       .pcalcText p {
           font-size: 0.85em;
       }
        .img-block {
            width: 25%;
        }
        .img-block img { 
            width: 100%;
            height: 100%;
        }
        
        .form-group {
            display: flex;
            font-size: 1.2em;
            
        }
        #dropdown {
            
            height: 40px;
            font-size: 1em;
            width: 100%;
            border: none;
            background: white;
            border-radius: none;
            outline: none;
            color: #000;
        }

        #dropdown::focus {
            border-radius: none;
            outline: none;
        }
        #dropdown:hover {
            cursor: pointer;
        }
        #pcalcServices {
            border: 1px solid #222;
            width: 50%;
        }
        #submit-form {
            width: 50%;
            background-color: #000;
        }

        #submit-form:hover {
            cursor: pointer;
        }
        
        #submit {
            margin: 0.5em auto;
            text-align: center;
            color: whitesmoke;
        }
        /*Responsive part*/
        @media (max-width: 870px) {
            // .priceCalc-container *{
            //     border: solid red;
            // }
            .form-group {
                flex-direction: column;
            }
            #pcalcServices {
                width: 80%;
                margin-bottom: 1em;
            }
            #dropdown {
                text-align: center;
            }
            #submit-form {
                width: 80%;
                background-color: #000;
                border: 1px solid #000;
            }
            .left-group {
                width: 60%;
            }
            .img-block {
                width: 30%;
            }
        }

        @media (max-width: 800px) { 
            .pcalcText p {
                font-size: 0.7em;
            }
        }

        @media (max-width: 815px) { 
            .priceCalc-container {
                flex-direction: column-reverse;
            }
            .img-block {
                width: 60%;
                margin: 1em auto;
            }
            .left-group {
                width: 80%;
                margin: 1em auto;
            }
            .pcalcText h3, .pcalcText p  {
                text-align: center;
            }
            #pcalcServices, #submit-form {
                margin: 0.5em auto;
            }
        }

        @media (max-width: 580px) { 
            .pcalcText h3 {
                font-size: 1.6em;
            }
        }
        
        @media (max-width: 495px) {
            .pcalcText h3 {
                font-size: 1.5em;
            }
            .pcalcText p {
                font-size: 0.6em;
            }
            .form-group {
                font-size: 1em;
            }
        }

        @media (max-width: 435px) {
            .pcalcText h3 {
                font-size: 1.2em;
            }
            .pcalcText p {
                display: none;
            }
        }

        @media (max-width: 375px) {
            .form-group {
                font-size: .9em;
            }
        }

        @media (max-width: 345px) {
            .pcalcText h3 {
                font-size: 1.1em;
            }

            .form-group {
                font-size: .8em;
            }
        }

        @media (max-width: 315px) {
            .pcalcText h3 {
                font-size: 1em;
            }

            .form-group {
                font-size: .7em;
            }
        }
    </style>
    <div class = "priceCalc-container">
        <div class = "left-group">
            <div class = "pcalcText">
                <h3>Оценка стоимости ремонта</h3>
                <p>* Оценка стоимости ремонта на сайте является приблизительным. <br>
                    Точный расчет производится мастером на объекте
                </p>
            </div>
            <div class = "form-group">
                <form id = "pcalcServices">
                    <select id = "dropdown" name = "role">
                        <option disabled selected value>Выберите неисправность</option>
                        <option value = "close">Окно не закрывается</option>
                        <option value = "windBlow">Окно продувает</option>
                        <option value = "fogging">Окно запотевает</option>
                        <option value = "broken">Окно разбито</option>
                        <option value = "squeaks">Окно скрипит</option>
                        <option value = "noise">Шум с улицы</option>
                        <option value = "freeze">Окно промерзает</option>
                        <option value = "open">Окно не открывается</option>
                        <option value = "handle">Сломалась ручка</option>
                        <option value = "other">Другие неисправности...</option>
                    </select>
                </form>
                <form id = "submit-form">
                    <div type = "submit" id = "submit" class = "typeButton">Посмотреть стоимость</div>
                </form>   
            </div>
        </div>
        <div class = "img-block">
            <img src = "img/windowPriceCalc.png" alt = "window drawing"/>
        </div>  
    </div>
     
`
class priceCalculaction extends HTMLElement {
    
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(priceCalc.content.cloneNode(true));
    }
    connectedCallback() {
        this.shadowRoot.querySelector('#submit').addEventListener('click', () =>this.funcOpen());
    }
    funcOpen() {
        
        let a = this.shadowRoot.querySelector('#dropdown');
        
        switch (a.value) {
            case 'close':
                window.location.replace("repairs.html#noClose");
                break;
            case 'windBlow':
                window.location.replace("repairs.html#windBlow");
                break;
            case 'fogging':
                window.location.replace("repairs.html#fogging");
                break;
            case 'broken':
                window.location.replace("repairs.html#broken");
                break;
            case 'skewed':
                window.location.replace("repairs.html#skewed");
                break;
            case 'squeaks':
                window.location.replace("repairs.html#squeaks");
                break;
            case 'noise':
                window.location.replace("repairs.html#noise");
                break;
            case 'freeze':
                window.location.replace("repairs.html#freeze");
                break;
            case 'open':
                window.location.replace("repairs.html#open");
                break;
            case 'handle':
                window.location.replace("repairs.html#handle");
                break;
            case 'hot':
                window.location.replace("repairs.html#hot");
                break;
            case 'cold':
                window.location.replace("repairs.html#cold");
                break;
            case 'other':
                window.location.replace("repairs.html#other");
                break;
            default:
                break;
        }
    }
};
window.customElements.define('price-calc', priceCalculaction);