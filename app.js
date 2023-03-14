customElements.define('page-home', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <ion-header>
                <ion-toolbar color="medium">
                    <ion-title>Home</ion-title>
                </ion-toolbar>
            </ion-header>

            <ion-content padding>
                <ion-card>
                    <ion-card-header>
                        <ion-card-title><h1>Choose an Adventure</h1></ion-card-title>
                    </ion-card-header>

                    <ion-card-content>
                        <ion-button expand="block" href="#/parks">Find Parks</ion-button>
                        <ion-button expand="block" href="#/hikes">Find Hikes</ion-button>
                        <ion-button expand="block" href="#/coasts">Find Coastal Walks</ion-button>
                    </ion-card-content>
                </ion-card>
            </ion-content>

            <ion-footer>
          
                <ion-toolbar color="light">
                    <ion-grid>
                        <ion-row>
                            <ion-col size="5"><ion-button class="navbtns"href="#/"><ion-icon name="home"></ion-icon></ion-button></ion-col>
                            <ion-col size="5"><ion-button href="#/themap"><ion-icon name="navigate"></ion-button></ion-col>
                            <ion-col size="2"><ion-button href="#/hikes"><ion-icon name="person"></ion-button></ion-col>
                        </ion-row>
                    </ion-grid>
                </ion-toolbar>
            </ion-footer
        `;
    }
});

customElements.define('page-parks', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <ion-header>
                <ion-toolbar color="success">
                    <ion-buttons>
                        <ion-back-button></ion-back-button>
                    </ion-buttons>
                    <ion-title slot="end">Parks</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content>
                <ion-card>
                    <ion-card-header>
                        <ion-card-title><h1>Parks</h1></ion-card-title>
                    </ion-card-header>

                    <ion-card-content>
                        <ion-item>
                            <ion-label>Hi</ion-label>
                        </ion-item>
                        <ion-button expand="block" href="#/three">Go to page three</ion-button>
                    </ion-card-content>
                </ion-card>
            </ion-content>
        `;
    }
});

customElements.define('page-hikes', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <ion-header>
                <ion-toolbar color="danger">
                    <ion-buttons>
                        <ion-back-button></ion-back-button>
                    </ion-buttons>
                    <ion-title slot="end">Hikes</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content>
                <ion-card>
                    <ion-card-header>
                        <ion-card-title><h1>Hikes</h1></ion-card-title>
                    </ion-card-header>

                    <ion-card-content>
                        <ion-item>
                            <ion-label>Hi</ion-label>
                        </ion-item>
                        <ion-button expand="block" href="#/three">Go to page three</ion-button>
                    </ion-card-content>
                </ion-card>
            </ion-content>
        `;
    }
});

customElements.define('page-coasts', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <ion-header>
                <ion-toolbar color="secondary">
                    <ion-buttons>
                        <ion-back-button></ion-back-button>
                    </ion-buttons>
                    <ion-title slot="end">Coastal Walks</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content>
                <ion-card>
                    <ion-card-header>
                        <ion-card-title><h1>Coastal Waks</h1></ion-card-title>
                    </ion-card-header>

                    <ion-card-content>
                        <ion-item>
                            <ion-label>Hi</ion-label>
                        </ion-item>
                        <ion-button expand="block" href="#/three">Go to page three</ion-button>
                    </ion-card-content>
                </ion-card>
            </ion-content>
        `;
    }
});

customElements.define('page-map', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <ion-header>
                <ion-toolbar color="secondary">
                    <ion-buttons>
                        <ion-back-button></ion-back-button>
                    </ion-buttons>
                    <ion-title slot="end">Map</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content>
                <ion-card>
                    <ion-card-header>
                        <ion-card-title><h1>Coastal Waks</h1></ion-card-title>
                    </ion-card-header>

                    <ion-card-content>
                        <ion-item>
                            <ion-label>Hi</ion-label>
                        </ion-item>
                        <ion-button expand="block" href="#/three">Go to page three</ion-button>
                    </ion-card-content>
                </ion-card>
            </ion-content>
        `;
    }
});