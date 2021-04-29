import config, { RouteNode } from './config';

export default function getCategoryFromRoute(route: string): RouteNode {
    var category: RouteNode = { id: "", title: "" };

    // Vi er kun interessert i tredje element.
    route = route.split("/")[2];

    // Let etter route i oppsett.
    config.forEach((element) => {
        if(element.id?.includes(route!)) {
            category.id = element.id;
            category.title = element.title;
            //category.push(element.id);// = element.title;
            //category.push(element.title);
            return;
        }
    })

    return category;// === undefined ? [] : category;
}