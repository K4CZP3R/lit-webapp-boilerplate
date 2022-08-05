import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { store } from './redux/store';
import { connect } from "pwa-helpers"
import { clickTwo } from './redux/reducers/click.reducer';


@customElement('about-element')
export class AboutElement extends connect(store)(LitElement) {
    static override styles = css``;

    @property({ type: Number })
    clicksNow = 0;

    override stateChanged(_state: { clickReducer: { clicks: number; }; }): void {
        super.stateChanged(_state);

        this.clicksNow = _state.clickReducer.clicks;
    }




    override render() {
        return html`
            
            This is about element, click <button @click="${() => store.dispatch(clickTwo())}">+2</button>
            
            Current click count: ${this.clicksNow}
            <br>
            <a href="/">Go to Home</a>
            
            `;


    }
}
declare global {
    interface HTMLElementTagNameMap {
        'about-element': AboutElement;
    }
}