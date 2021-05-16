function createWebComponent(componentName, fileName) {
    class CustomComponent extends HTMLElement {
        async connectedCallback() {
            const data = (await (await fetch(fileName)).text());
            this.innerHTML = data;
        }
    }

    customElements.define(componentName, CustomComponent);
}

createWebComponent('app-navbar', 'components/app-navbar/app-navbar.html')