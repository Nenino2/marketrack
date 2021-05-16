function createWebComponent(componentName, fileName) {
    class CustomComponent extends HTMLElement {
        async connectedCallback() {
            let data = (await (await fetch(fileName)).text());
            data = data.replace(/{{\s*SLOT\s*}}/, this.innerHTML)
            this.innerHTML = data;
        }
    }

    customElements.define(componentName, CustomComponent);
}

createWebComponent('app-navbar', '/components/app-navbar/app-navbar.html')
createWebComponent('app-header', '/components/app-header/app-header.html')