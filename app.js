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
                    ${ehikes.map(ehike => `
                        <ion-item button onclick="showEDetail('${ehike.title}')">
                            <ion-avatar slot="start">
                                <img src="${ehike.avatar}">
                            </ion-avatar>
                            <ion-label>
                                <h1>${ehike.title}</h1>
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
            <ion-content padding>                
                <ion-list>
                    ${mhikes.map(mhike => `
                        <ion-item button onclick="showMDetail('${mhike.title}')">
                            <ion-avatar slot="start">
                                <img src="${mhike.avatar}">
                            </ion-avatar>
                            <ion-label>
                                <h1>${mhike.title}</h1>
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


function showEDetail(eTitle) {
    let ehike = new Object;
    for (anehike of ehikes) {
        if (anehike.title === eTitle) {
            ehike = anehike;
        }
    }
    console.log(ehike.title)
    nav.push('easy-hike-detail', { ehike });
}

function showMDetail(mTitle) {
    let mhike = new Object;
    for (anmhike of mhikes) {
        if (anmhike.title === mTitle) {
            mhike = anmhike;
        }
    }
    console.log(mhike.title)
    nav.push('medium-hike-detail', { mhike });
}

customElements.define('easy-hike-detail', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <ion-header >
        <ion-toolbar color="success">
            <ion-buttons slot="start">
                <ion-back-button defaultHref="/"></ion-back-button>
            </ion-buttons>
            <ion-title>${this.ehike.title}
            </ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content fullscreen class="ion-padding">
        <ion-card>
            <ion-card-content>
                <ion-item>
                    <ion-img id="img-choice" src="${this.ehike.image}"/>
                </ion-item>
            </ion-card-content>
        </ion-card>
        <ion-card>
            <ion-card-content>
                <ion-item>
                    <h1>${this.ehike.title}</h1>
                </ion-item>
                <ion-item>
                    <ion-label>${this.ehike.distance}</ion-label>
                </ion-item>
                <ion-item>
                    <p>${this.ehike.description}</p>
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

customElements.define('medium-hike-detail', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <ion-header >
        <ion-toolbar color="warning">
            <ion-buttons slot="start">
                <ion-back-button defaultHref="/"></ion-back-button>
            </ion-buttons>
            <ion-title>${this.mhike.title}
            </ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content fullscreen class="ion-padding">
        <ion-card>
            <ion-card-content>
                <ion-item>
                    <ion-img id="img-choice" src="${this.mhike.image}"/>
                </ion-item>
            </ion-card-content>
        </ion-card>
        <ion-card>
            <ion-card-content>
                <ion-item>
                    <h1>${this.mhike.title}</h1>
                </ion-item>
                <ion-item>
                    <ion-label>${this.mhike.distance}</ion-label>
                </ion-item>
                <ion-item>
                    <p>${this.mhike.description}</p>
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