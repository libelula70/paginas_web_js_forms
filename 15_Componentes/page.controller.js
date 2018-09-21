import { HeadComponent } from "./Componentes/head.component.js";
import { HeaderComponent } from "./Componentes/header.component.js";
import { FooterComponent } from "./Componentes/footer.component.js";
import { APPTITLE } from "./config.js";
import { MenuComponent } from "./Componentes/menu.component.js";


export class PageController {
    constructor (page, title) {
        this.appTitle = APPTITLE
        this.pageTitle = (page) ? this.appTitle + '-' + page : this.appTitle
        this.title = title || this.appTitle
        this.contentFooter = {
                autor: 'Ana Belén',
                empresa: 'CAS Training',
                lugar: 'Getafe - 2018'
            }
        //document.head.innerHTML += new HeadComponent('Componentes').render()
        this.head = new HeadComponent(this.pageTitle).render()
        this.header = new HeaderComponent(this.title).render()
        this.menu = new MenuComponent().render()
        this.main = document.createElement('main')
        this.footer = new FooterComponent(this.contentFooter).render()

        document.head.insertAdjacentHTML('afterbegin', this.head)    
        document.body.appendChild(this.header)
        document.body.appendChild(this.menu)
        document.body.appendChild(this.main)
        document.body.appendChild(this.footer)

    }


}