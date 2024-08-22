class Footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <ul class="list-inline">
                    <li class="list-inline-item"><a href="index.html">Home</a></li>
                    <li class="list-inline-item"><a href="Impressum.html">Impressum</a></li>
                    <li class="list-inline-item"><a href="Datenschutz.html">Datenschutz</a></li>
                </ul>
                <p class="copyright">Pancake Umbrella © 2024</p>
            </footer>
        `;
    }
}

customElements.define('footer-component', Footer);