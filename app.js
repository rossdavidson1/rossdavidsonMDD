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
                            <ion-col size="2"><ion-button href="#/profile"><ion-icon name="person"></ion-button></ion-col>
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

            <ion-footer>
            <ion-toolbar color="light">
                <ion-grid>
                    <ion-row>
                        <ion-col size="5"><ion-button class="navbtns"href="#/"><ion-icon name="home"></ion-icon></ion-button></ion-col>
                        <ion-col size="5"><ion-button href="#/themap"><ion-icon name="navigate"></ion-button></ion-col>
                        <ion-col size="2"><ion-button href="#/profile"><ion-icon name="person"></ion-button></ion-col>
                    </ion-row>
                </ion-grid>
            </ion-toolbar>
            </ion-footer
        `;
    }
});

customElements.define('page-hikes', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <ion-header>
                <ion-toolbar color="dark">
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
                            <ion-label>Choose Difficulty</ion-label>
                        </ion-item>
                        <ion-button expand="block" color="success" href="#/hikes/easy">Easy</ion-button>
                        <ion-button expand="block" color="warning" href="#/hikes/medium">Medium</ion-button>
                        <ion-button expand="block" color="danger" href="#/hikes/hard">Hard</ion-button>
                    </ion-card-content>
                </ion-card>
            </ion-content>

            <ion-footer>
            <ion-toolbar color="light">
                <ion-grid>
                    <ion-row>
                        <ion-col size="5"><ion-button class="navbtns"href="#/"><ion-icon name="home"></ion-icon></ion-button></ion-col>
                        <ion-col size="5"><ion-button href="#/themap"><ion-icon name="navigate"></ion-button></ion-col>
                        <ion-col size="2"><ion-button href="#/profile"><ion-icon name="person"></ion-button></ion-col>
                    </ion-row>
                </ion-grid>
            </ion-toolbar>
            </ion-footer
        `;
    }
});

customElements.define('page-easy-hikes', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <ion-header>
                <ion-toolbar color="success">
                    <ion-buttons>
                        <ion-back-button></ion-back-button>
                    </ion-buttons>
                    <ion-title slot="end">Easy Hikes</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content padding>                
                <ion-list>
                    ${animals.map(animal => `
                        <ion-item button onclick="showDetail('${animal.title}')">
                            <ion-avatar slot="start">
                                <img src="${animal.avatar}">
                            </ion-avatar>
                            <ion-label>
                                <h1>${animal.title}</h1>
                            </ion-label>
                        </ion-item>
                    `).join('\n')}
                
                </ion-list>   
            </ion-content>

            <ion-footer>
            <ion-toolbar color="light">
                <ion-grid>
                    <ion-row>
                        <ion-col size="5"><ion-button class="navbtns"href="#/"><ion-icon name="home"></ion-icon></ion-button></ion-col>
                        <ion-col size="5"><ion-button href="#/themap"><ion-icon name="navigate"></ion-button></ion-col>
                        <ion-col size="2"><ion-button href="#/profile"><ion-icon name="person"></ion-button></ion-col>
                    </ion-row>
                </ion-grid>
            </ion-toolbar>
            </ion-footer
        `;
    }
});

const nav = document.querySelector('ion-nav');


function showDetail(aTitle) {
    let animal = new Object;
    for (anAnimal of animals) {
        if (anAnimal.title === aTitle) {
            animal = anAnimal;
        }
    }
    console.log(animal.title)
    nav.push('easy-hike-detail', { animal });
}

customElements.define('easy-hike-detail', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <ion-header >
        <ion-toolbar color="success">
            <ion-buttons slot="start">
                <ion-back-button defaultHref="/"></ion-back-button>
            </ion-buttons>
            <ion-title>${this.animal.title}
            </ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content fullscreen class="ion-padding">
        <ion-card>
            <ion-card-content>
                <ion-item>
                    <ion-img id="img-choice" src="${this.animal.image}"/>
                </ion-item>
                <ion-item>
                    <ion-label><h1>${this.animal.title}s go ${this.animal.sound}</h1></ion-label>
                </ion-item>
            </ion-card-content>
        </ion-card>
    </ion-content>

    <ion-footer>
            <ion-toolbar color="light">
                <ion-grid>
                    <ion-row>
                        <ion-col size="5"><ion-button class="navbtns"href="#/"><ion-icon name="home"></ion-icon></ion-button></ion-col>
                        <ion-col size="5"><ion-button href="#/themap"><ion-icon name="navigate"></ion-button></ion-col>
                        <ion-col size="2"><ion-button href="#/profile"><ion-icon name="person"></ion-button></ion-col>
                    </ion-row>
                </ion-grid>
            </ion-toolbar>
            </ion-footer
        `;
    }
});


customElements.define('page-medium-hikes', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <ion-header>
                <ion-toolbar color="warning">
                    <ion-buttons>
                        <ion-back-button></ion-back-button>
                    </ion-buttons>
                    <ion-title slot="end">Medium Hikes</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content>
                <ion-card>
                    <ion-card-header>
                        <ion-card-title><h1>Medium Hikes</h1></ion-card-title>
                    </ion-card-header>

                    <ion-card-content>
                        <ion-item>
                            <ion-label>Hi</ion-label>
                        </ion-item>
                        <ion-button expand="block" href="#/three">Go to page three</ion-button>
                    </ion-card-content>
                </ion-card>
            </ion-content>

            <ion-footer>
            <ion-toolbar color="light">
                <ion-grid>
                    <ion-row>
                        <ion-col size="5"><ion-button class="navbtns"href="#/"><ion-icon name="home"></ion-icon></ion-button></ion-col>
                        <ion-col size="5"><ion-button href="#/themap"><ion-icon name="navigate"></ion-button></ion-col>
                        <ion-col size="2"><ion-button href="#/profile"><ion-icon name="person"></ion-button></ion-col>
                    </ion-row>
                </ion-grid>
            </ion-toolbar>
            </ion-footer
        `;
    }
});

customElements.define('page-hard-hikes', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <ion-header>
                <ion-toolbar color="danger">
                    <ion-buttons>
                        <ion-back-button></ion-back-button>
                    </ion-buttons>
                    <ion-title slot="end">Hard Hikes</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content>
                <ion-card>
                    <ion-card-header>
                        <ion-card-title><h1>Hard Hikes</h1></ion-card-title>
                    </ion-card-header>

                    <ion-card-content>
                        <ion-item>
                            <ion-label>Hi</ion-label>
                        </ion-item>
                        <ion-button expand="block" href="#/three">Go to page three</ion-button>
                    </ion-card-content>
                </ion-card>
            </ion-content>

            <ion-footer>
            <ion-toolbar color="light">
                <ion-grid>
                    <ion-row>
                        <ion-col size="5"><ion-button class="navbtns"href="#/"><ion-icon name="home"></ion-icon></ion-button></ion-col>
                        <ion-col size="5"><ion-button href="#/themap"><ion-icon name="navigate"></ion-button></ion-col>
                        <ion-col size="2"><ion-button href="#/profile"><ion-icon name="person"></ion-button></ion-col>
                    </ion-row>
                </ion-grid>
            </ion-toolbar>
            </ion-footer
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

            <ion-footer>
            <ion-toolbar color="light">
                <ion-grid>
                    <ion-row>
                        <ion-col size="5"><ion-button class="navbtns"href="#/"><ion-icon name="home"></ion-icon></ion-button></ion-col>
                        <ion-col size="5"><ion-button href="#/themap"><ion-icon name="navigate"></ion-button></ion-col>
                        <ion-col size="2"><ion-button href="#/profile"><ion-icon name="person"></ion-button></ion-col>
                    </ion-row>
                </ion-grid>
            </ion-toolbar>
            </ion-footer
        `;
    }
});

customElements.define('page-map', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <ion-header>
                <ion-toolbar color="secondary">
                    <ion-title slot="start">Map</ion-title>
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
                    </ion-card-content>
                </ion-card>
            </ion-content>

            <ion-footer>
            <ion-toolbar color="light">
                <ion-grid>
                    <ion-row>
                        <ion-col size="5"><ion-button class="navbtns"href="#/"><ion-icon name="home"></ion-icon></ion-button></ion-col>
                        <ion-col size="5"><ion-button href="#/themap"><ion-icon name="navigate"></ion-button></ion-col>
                        <ion-col size="2"><ion-button href="#/profile"><ion-icon name="person"></ion-button></ion-col>
                    </ion-row>
                </ion-grid>
            </ion-toolbar>
            </ion-footer
        `;
    }
});

customElements.define('page-profile', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <ion-header>
                <ion-toolbar color="warning">
                    <ion-title slot="start">Profile</ion-title>
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
                    </ion-card-content>
                </ion-card>
            </ion-content>

            <ion-footer>
            <ion-toolbar color="light">
                <ion-grid>
                    <ion-row>
                        <ion-col size="5"><ion-button class="navbtns"href="#/"><ion-icon name="home"></ion-icon></ion-button></ion-col>
                        <ion-col size="5"><ion-button href="#/themap"><ion-icon name="navigate"></ion-button></ion-col>
                        <ion-col size="2"><ion-button href="#/profile"><ion-icon name="person"></ion-button></ion-col>
                    </ion-row>
                </ion-grid>
            </ion-toolbar>
            </ion-footer
        `;
    }
});