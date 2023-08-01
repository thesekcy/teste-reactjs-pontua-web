interface Thumbnail {
    path: string;
    extension: string;
}

interface Comic {
    available: number;
    collectionURI: string;
    items: object[];
    returned: number;
}

interface Series {
    available: number;
    collectionURI: string;
    items: object[];
    returned: number;
}

interface Stories {
    available: number;
    collectionURI: string;
    items: object[];
    returned: number;
}

interface Events {
    available: number;
    collectionURI: string;
    items: object[];
    returned: number;
}

interface Url {
    type: string;
    url: string;
}

export interface IMarvelCharacter {
    id: number;
    name: string;
    description: string;
    modified: string;
    thumbnail: Thumbnail;
    resourceURI: string;
    comics: Comic;
    series: Series;
    stories: Stories;
    events: Events;
    urls: Url[];
}