import { getRoutes } from '.';

export default function getRouteFromStep(id: number | undefined): string {
    const routes = getRoutes();
    return  id === undefined ? "/" : routes[id]
}