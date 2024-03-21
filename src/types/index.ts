export interface homevideosType {
    items: [];
    kind: string;
    nextPageToken: string;
    pageInfo: {
        resultsPerPage: number;
        totalResults: number;
    };
    regionCode: string
}



export interface catchErrorType {
    code: string,
}


export interface channelDetailType {
    kind: string;
    id: string;
    snippet: {
        title: string;
        description: string;
        customUrl: string;
        publishedAt: string;
        thumbnails: {
            default: {
                url: string;
                width: number;
                height: number;
            };
            medium: {
                url: string;
                width: number;
                height: number;
            };
            high: {
                url: string;
                width: number;
                height: number;
            };
        };
        localized: {
            title: string;
            description: string;
        };
        country: string;
    };
    contentDetails: {
        relatedPlaylists: {
            likes: string;
            uploads: string;
        };
    };
    statistics: {
        viewCount: string;
        subscriberCount: string;
        hiddenSubscriberCount: boolean;
        videoCount: string;
    };
    brandingSettings: {
        channel: {
            title: string;
            description: string;
            keywords: string;
            unsubscribedTrailer: string;
            country: string;
        };
        image: {
            bannerExternalUrl: string;
        };
    };
}




export interface channelVideoType {
    kind: string;
    id: {
        kind: string;
        playlistId: string;
        videoId: string
    };
    snippet: {
        publishedAt: string;
        channelId: string;
        title: string;
        description: string;
        thumbnails: {
            default: {
                url: string;
                width: number;
                height: number;
            };
            medium: {
                url: string;
                width: number;
                height: number;
            };
            high: {
                url: string;
                width: number;
                height: number;
            };
        };
        channelTitle: string;
        liveBroadcastContent: string;
        publishTime: string;
    };
}

export interface VideoDataType {
    id: {
        videoId?: string;
        playlistId?: string;
    };
    snippet?: {
        thumbnails?: {
            high?: {
                url?: string;
            };
        };
        title?: string;
        channelId?: string;
        channelTitle?: string;
        publishedAt?: string;
    };
}


export interface VideoSnippet {
    description: string;
    title: string;
    thumbnails: {
        high: {
            url: string;
        };
    };
    channelId: string;
    channelTitle: string;
    publishedAt: string;
}

export interface VideoStatistics {
    viewCount: string;
    likeCount: string;
    commentCount: string;
}

export interface VideoItem {
    id: string;
    snippet: VideoSnippet;
    statistics: VideoStatistics;
}

export interface SuggestedVideoItem {
    id: {
        videoId: string;
    };
    snippet: {
        title: string;
        thumbnails: {
            medium: {
                url: string;
            };
        };
        channelTitle: string;
        publishedAt: string;
    };
}

export interface SuggestedVideo {
    items: SuggestedVideoItem[];
}