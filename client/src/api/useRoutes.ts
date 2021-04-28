import config from './config';

export default function useRoutes(): string[] {
    const root = "/sysco-digital-onboarding";
    var routes: string[] = [];
    config.forEach((part) => {
        //const route = `/root/${part.id}`;
        //routes.push(route);

        part.pages.forEach((page) => {
            const route = `${root}/${part.id}/${page.id}`;
            routes.push(route);
        })
    })

    return routes// routes;
}