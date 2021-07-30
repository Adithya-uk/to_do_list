import React from 'react';
import {useState,useEffect} from 'react';
import APIService from './APIService';
import ArticleList from './ArticleList';

function Today ()  {
    
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

        fetch('/api/viewtoday',{
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
        <h1>Today's Tasks</h1>
        
          <ArticleList articles = {articles} deleteArticle = {deleteArticle}/>
      </div>
    )
}

export default Today