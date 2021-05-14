import { createServer } from "miragejs"

// Data som skal hentes fra "back-end".
import onboardingData from './assets/onboarding-data.json';

export function makeServer({ environment = "test" } = {}) {
    let server = createServer({
        routes() {
            this.namespace = "api"

            this.get('onboarding', () => {
                return onboardingData;
            })
        },
    })

    return server
}