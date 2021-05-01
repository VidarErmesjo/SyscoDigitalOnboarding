import config, { RouteNode } from './config';

export default function getCategoryFromRoute(route: string): RouteNode {
    var category: RouteNode = { id: "", title: "" };

    // Vi er kun interessert i tredje element.
    route = route?.split("/")[2];

    // Let etter route i oppsett.
    config.forEach((part) => {
        if(part.id?.includes(route!)) {
            category.id = part.id;
            category.title = part.title;
            //category.push(element.id);// = element.title;
            //category.push(element.title);
            return;
        }
    })

    console.log(category);

    return category;// === undefined ? [] : category;
}