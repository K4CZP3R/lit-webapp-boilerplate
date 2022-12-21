import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

import { Router } from "@vaadin/router";
import { connect } from "pwa-helpers";
import { store } from "../../redux/store";

@customElement("app-element")
export class AppElement extends connect(store)(LitElement) {
    static override styles = css``;

    @property({ type: Object })
        router?: Router;

    @property({ type: Number })
        clicksNow = 0;

    override stateChanged(_state: { clickReducer: { clicks: number; }; }): void {
        super.stateChanged(_state);

        this.clicksNow = _state.clickReducer.clicks;
    }

    protected override firstUpdated(_changedProperties: Map<PropertyKey, unknown>): void {
        super.firstUpdated(_changedProperties);
        this.router = new Router(this.shadowRoot!.getElementById("outlet"));
        this.router.setRoutes([
            {
                path: "/",
                component: "home-element",
                action: async () => {
                    await import("~elements/home-element");
                },
            },
            {
                path: "/about",
                component: "about-element",
                action: async () => {
                    await import("~elements/about-element");
                },
            },
        ]);
    }

    override render() {
        return html`
        <div>
            <div>Header is aware of clicks: ${this.clicksNow}</div>
            <div id="outlet"></div>
            <div>Footer</div>
        </div>
        `;
    }
}
declare global {
    interface HTMLElementTagNameMap {
        "app-element": AppElement;
    }
}
