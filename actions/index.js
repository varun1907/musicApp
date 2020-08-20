export const SONG_LIST = 'song_list';


export const getSongs = (param,successCallback) => dispatch => {
    if(param == '')
    {
        successCallback()
        dispatch({type: SONG_LIST, payload: []});
    }
    else
    {
        let url = `https://itunes.apple.com/search?term=${param}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            successCallback()
            dispatch({type: SONG_LIST, payload: data.results});
        });
    }
    
} 