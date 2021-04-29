import config, { RouteNode } from './config';
import getCategoryFromRoute from './getCategoryFromRoute';

export default function getPagesFromRoute(route: string): RouteNode[] {
    // OBS! Sett til = [] om du ikke vil ha med hovedkategorien i output.
    const category = getCategoryFromRoute(route);
    var pages: RouteNode[] = [];//[{ id: category.id, title: category.title }];

    // Vi er kun interessert i tredje element.
    route = route.split("/")[2];

    // Let etter route i oppsett.
    config.forEach((element) => {
        if(element.id?.includes(route!)) {
            element.pages?.map((page) => {
                pages.push({ id: page.id, title: page.title })
            })
            //category.push(element.id);// = element.title;
            //category.push(element.title);
            return;
        }
    })

    return pages;// === undefined ? [] : category;
}