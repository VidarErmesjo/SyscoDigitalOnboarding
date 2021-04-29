import config, { RouteNode } from './config';

export default function getPages(category?: string): string[] { //RouteNode {
    //var pages: RouteNode = { id: "", title: undefined };
    var pages: string[] = [];

    config.forEach((element) => element.pages?.forEach((page) => pages.push(page.title!)));
    //config.filter((element) => element.id === category).forEach((page) => console.log(page.title));

    return pages;
}