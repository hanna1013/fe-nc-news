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

export const getSingleArticle = (article_id) => {
    return articleApi
    .get(`/articles/${article_id}`)
    .then((response) => {
        return response.data.article;
    });
   
}

export const patchVote = (article_id, value) => {
    return articleApi
    .patch(`/articles/${article_id}`, { inc_votes: value})
    .then((response) => {
        console.log(response)
        return response.data.article
    })
}