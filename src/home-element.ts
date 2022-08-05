import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { connect } from "pwa-helpers"
import { clickOne } from './redux/reducers/click.reducer';
import { store } from './redux/store';


@customElement('home-element')
export class HomeElement extends connect(store)(LitElement) {
    static override styles = css``;

    @property({ type: Number })
    clicksNow = 0;


    override stateChanged(_state: { clickReducer: { clicks: number; }; }): void {
        super.stateChanged(_state);

        this.clicksNow = _state.clickReducer.clicks;
    }

    override render() {
        return html`
        
        This is home element, click <button @click="${() => store.dispatch(clickOne())}">+1</button>

        Current click cout: ${this.clicksNow}

        <br>
        <a href="/about">Go to About</a>

        `;
    }
}
declare global {
    interface HTMLElementTagNameMap {
        'home-element': HomeElement;
    }
}