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
    width: number
}

export interface IGenres {
    id: number,
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

export interface ISearchedMovieDataResponse {
    data: ISearchedMovie[]
}

export interface ISearchedMovie {
    aliases: string
    banner: string,
    firstAired: string,
    id: number,
    image: string,
    network: string,
    overview: string,
    poster: string,
    seriesName: string,
    slug: string,
    status: string
}

export interface ISeriesInterface {
    name: string;
    translations: ITranslation[],
    trailers: ITrailers[],
    runtime: number,
    remoteids: IRemoteIds[],
    release_dates: IRelease_dates[],
    artworks: IArtworks[],
    genres: IGenres[],
    image: string;
}

export interface ISerieByIdDataResponse {
    data: ISerieById;
}

export interface ISerieById {
    added: string,
    airsDayOfWeek: string,
    airsTime: string,
    aliases: string[],
    banner: string,
    firstAired: string,
    genre: string[],
    id: number,
    imdbId: string,
    lastUpdated: number,
    network: string,
    networkId: string,
    overview: string,
    rating: string,
    runtime: string,
    seriesId: string,
    seriesName: string,
    siteRating: number,
    siteRatingCount: number,
    slug: string,
    status: string,
    zap2itId: string,
    fanart: string
}

export interface ISerieEpisodesDataResponse {
    data: ISerieEpisodes[];
}

export interface ISerieEpisodes {
    absoluteNumber: number,
    airedEpisodeNumber: number,
    airedSeason: number,
    airsAfterSeason: number,
    airsBeforeEpisode: number,
    airsBeforeSeason: number,
    director: string,
    directors: string,
    dvdChapter: number,
    dvdDiscid: string,
    dvdEpisodeNumber: number,
    dvdSeason: number,
    episodeName: string,
    filename: string,
    firstAired: string,
    guestStars: string,
    id: number,
    imdbId: string,
    lastUpdated: number,
    lastUpdatedBy: string,
    overview: string,
    productionCode: string,
    seriesId: string,
    showUrl: string,
    siteRating: number,
    siteRatingCount: number,
    thumbAdded: string,
    thumbAuthor: number,
    thumbHeight: string,
    thumbWidth: string,
    writers: string
}