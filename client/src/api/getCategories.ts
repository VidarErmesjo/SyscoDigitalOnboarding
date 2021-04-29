import config from './config';

export default function getCategories(): string[] {
    var categories: string[] = [];

    config.forEach((category) => categories.push(category.title!));

    return categories;
}