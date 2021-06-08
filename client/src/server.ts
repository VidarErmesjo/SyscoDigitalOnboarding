import { createServer } from "miragejs"

// Data som skal hentes fra "back-end".
import onboardingData from 'onboarding-data.json';

// Users
const users: string[] = [
    "navn.navnesen@sysco.no"
]

export function makeServer({ environment = "test" } = {}) {
    let server = createServer({
        routes() {
            this.namespace = "api"

            this.get('signup', () => {
                return users;
            })

            this.get('onboarding', () => {
                return onboardingData;
            })
        },
    })

    return server
}