import { PageController } from "../page.controller.js";

class About extends PageController {
    constructor() {
        super('about', 'Acerca de')
    }
 
}

document.addEventListener('DOMContentLoaded', () => { new About()})