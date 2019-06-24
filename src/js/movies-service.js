import config from './config';

//функция котор ищет по тексту
function getVideoByText(text){
    if(!text) return;

    return fetch(config.searchMovieUrl + text)
        .then(r => r.json());
}

export  default{
    getVideoByText
}