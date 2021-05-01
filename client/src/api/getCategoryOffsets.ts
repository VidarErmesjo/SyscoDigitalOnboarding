import config from './config';

export default function getCategoryOffsets(): number[] {
    var offsets: number[] = [];
    config.forEach((part) => offsets.push(part.pages?.length!));

    return offsets;
}