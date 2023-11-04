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

export const getCommentsForSingleArticle = (article_id) => {
    return articleApi
    .get(`/articles/${article_id}/comments`)
    .then((response) => {
        return response.data.comments;
    })
}


export const postComment = (article_id, comment) => {
    return articleApi
    .post(`/articles/${article_id}/comments`, comment)
    .then((response) => {
        console.log(response.data)
        return response.data;
    })
}