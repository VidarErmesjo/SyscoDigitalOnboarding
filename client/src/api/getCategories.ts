import config, { RouteNode } from './config';

export default function getCategories(): RouteNode[] {
    var categories: RouteNode[] = [];
    config.forEach((part) => categories.push(part));

    return categories;
}