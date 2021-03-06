import movie from '../movie';

export default class MovieList{
    constructor(data){
        this.data = data;
        
        this.renderMovies();
    }
    //вставляет в html
    drawToDom(selector){
        selector.appendChild(this.fragment);
        //selector.innerHTML = this.movieList;
    }

    //метод создающий список
    renderMovies(){
        this.fragment = document.createDocumentFragment();

        this.data.results.forEach(data => {
        
            const article = document.createElement('article');
            article.classList.add('movie');
            article.innerHTML = movie(data);
            this.fragment.appendChild(article);
        });
    }
}