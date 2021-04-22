import { createServer } from "miragejs"

// Data som skal hentes fra "back-end".
import onboardingData from './assets/onboarding-data.json';

// Verdenskart
import worldMap from './assets/world-map.json';

export function makeServer({ environment = "test" } = {}) {
    let server = createServer({
        routes() {
            this.namespace = "api"

            this.get('onboarding', () => {
                return {onboardingData}
            })

            this.get('map', () => {
                return {worldMap}
            })
        },
    })

    return server
}