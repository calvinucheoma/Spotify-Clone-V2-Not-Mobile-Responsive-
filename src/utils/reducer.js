import { reducerCases } from "./Constants";

export const initialState = {
    token: null,
    playlists: [],
    user: null,
    naija_hits_playlist: null,
    currentPlaying: null,
    playerState: false,
    selectedPlaylistId: "37i9dQZF1DWZCOSaet9tpB",
};

const reducer = (state, action) => {
    switch(action.type) {

        case reducerCases.SET_TOKEN: 
            return {
                ...state,
                token: action.token,
            };

        case reducerCases.SET_PLAYLISTS:
            return {
                ...state,
                playlists: action.playlists,
            };

        case reducerCases.SET_USER:
            return {
                ...state,
                user: action.user,
            };

        case reducerCases.SET_NAIJA_HITS_PLAYLIST:
            return {
                ...state,
                naija_hits_playlist: action.naija_hits_playlist,
            };

        case reducerCases.SET_PLAYING:
            return {
                ...state,
                currentPlaying: action.currentPlaying,
            };

        case reducerCases.SET_PLAYER_STATE:
            return {
                ...state,
                playerState: action.playerState,
            };

        case reducerCases.SET_PLAYLIST_ID:
            return {
                ...state,
                selectedPlaylistId: action.selectedPlaylistId,
            };

        default: 
            return state;
        
    };
};

export default reducer;