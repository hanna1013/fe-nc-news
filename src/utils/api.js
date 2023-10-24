import axios from 'axios';
const articleApi = axios.create({
    baseURL: "https://nc-news-0brq.onrender.com/api"
});
export const getArticles = () => {
    return articleApi
    .get('/articles')
    .then((response) => {
        return response.data.articles;
    })
}