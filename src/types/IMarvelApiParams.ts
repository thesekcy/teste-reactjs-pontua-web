export interface IMarvelApiParams {
    ts: number,
    apikey: string,
    hash: string,
    limit: number,
    offset?: number,
    nameStartsWith?: string,
    character?: string,
}