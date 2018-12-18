import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: '遇见', duration: '4:05' },
        { title: '暗香', duration: '4:05' },
        { title: '夜曲', duration: '4:05' },
        { title: 'My Love', duration: '4:05' },
        { title: '光辉岁月', duration: '4:05' },
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});