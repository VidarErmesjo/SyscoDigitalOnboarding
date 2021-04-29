import config, { root } from './config';

export default function getRoutes(): string[] {
    var routes: string[] = [];

    config.forEach((part) => {
        part.pages?.forEach((page) => {
            const route = `${root}/${part.id}/${page.id}`;
            routes.push(route);
        })
    })

    return routes// routes;
}