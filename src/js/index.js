import MovieList from './components/movie-list';

import moviesService from './movies-service';


const input = document.querySelector('.search-input');
const movieList = document.querySelector('.movies');

input.addEventListener('input', e=>{
    const searchText = e.target.value;

    moviesService.getVideoByText(searchText)
    //возвращает promise кот надо распарсить
    //.then(r => r.json())
    //.then(result =>console.log(result))
    .then(result => {
       // console.log(result);
        //new MovieList(result);
        const list = new MovieList(result);
        list.drawToDom(movieList);
    });
});




