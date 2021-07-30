import React from 'react';
import {useState,useEffect} from 'react';
import APIService from './APIService';
import ArticleList from './ArticleList';

function Due ()  {
    
    const [articles, setArticles] = useState([])

    const deleteArticle = (article) => {
        const new_articles = articles.filter(myarticle => {

            if(myarticle.id === article.id){
                return false;
            }
            return true
        })

        setArticles(new_articles)
    }

    useEffect(() => {

        fetch('/api/viewdue',{
            methods : 'GET',
            headers: {
                'Content-Type' : 'application/json'
            }


        })
        .then(resp => resp.json())
        .then(resp => setArticles(resp))
        .catch(error => console.log(error))

    },[])

   
   

    return(
      <div>
        <h1>Due Tasks</h1>
        
          <ArticleList articles = {articles} deleteArticle = {deleteArticle}/>
      </div>
    )
}

export default Due