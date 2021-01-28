export interface IMovieUpdates {
    movies: number[];
}

export interface IMovieDataResponse {
    data: IMovie
}

export interface IMovie {
    url: string,
    translations: ITranslation[],
    trailers: ITrailers[],
    runtime: number,
    remoteids: IRemoteIds[],
    release_dates: IRelease_dates[],
    artworks: IArtworks[],
    genres: IGenres[],
    id: number,
    people: IPeople,
}

export interface ITranslation {
    is_primary: boolean,
    language_code: string,
    name: string,
    overview: string,
    tagline: string
}

export interface ITrailers {
    name: string,
    url: string
}

export interface IRemoteIds {
    id: string,
    source_id: number,
    source_name: string,
    source_url: string,
    url: string
}

export interface IRelease_dates {
    country: string,
    date: string,
    type: string
}

export interface IArtworks {
    artwork_type: string,
    height: number,
    id: string,
    is_primary: boolean,
    tags: string,
    thumb_url: string,
    url: string,
    width: 0
}

export interface IGenres {
    id: 0,
    name: string,
    url: string
}

export interface IPeople {
    actors: IActors[],
    directors: IDirectors[],
    producers: IProducers[],
    writers: IWriters[],

}

export interface IActors {
    id: string,
    imdb_id: string,
    is_featured: boolean,
    name: string,
    people_facebook: string,
    people_id: string,
    people_image: string,
    people_instagram: string,
    people_twitter: string,
    role: string,
    role_image: string
}

export interface IDirectors {
    id: string,
    imdb_id: string,
    is_featured: boolean,
    name: string,
    people_facebook: string,
    people_id: string,
    people_image: string,
    people_instagram: string,
    people_twitter: string,
    role: string,
    role_image: string
}

export interface IProducers {
    id: string,
    imdb_id: string,
    is_featured: boolean,
    name: string,
    people_facebook: string,
    people_id: string,
    people_image: string,
    people_instagram: string,
    people_twitter: string,
    role: string,
    role_image: string
}

export interface IWriters {
    id: string,
    imdb_id: string,
    is_featured: boolean,
    name: string,
    people_facebook: string,
    people_id: string,
    people_image: string,
    people_instagram: string,
    people_twitter: string,
    role: string,
    role_image: string
}