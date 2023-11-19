import axios from 'axios';


const articleApi = axios.create({
    baseURL: "https://nc-news-0brq.onrender.com/api"
});
export const getArticles = (topics, sortby) => {
    const params = {
        topic: topics,
        sort_by: sortby,
        
    }
    return articleApi
    .get('/articles', {params})
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
        console.log(response)
        return response.data.comment;
    }).catch((error) => {
        console.log(error)
    })
}
export const patchVote = (value, article_id) => {
    return articleApi
    .patch(`/articles/${article_id}`, { inc_votes: value})
    .then((response) => {
        console.log(response)
        return response.data.article;
    })
}

export const getTopics = () => {
    return articleApi
    .get('/topics')
    .then((response) => {
        return response.data.topics
    })
}
 
export const deleteComments = (comment_id) => {
    return articleApi
    .delete(`/comments/${comment_id}`)
   .then((response) => {
    console.log(response)
    return response.data.comment
   })
}

export const getUsers = () => {
    return articleApi
    .get('/users')
    .then((response) => {
        return response.data.users
    })
}