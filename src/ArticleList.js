import React from 'react'
import APIService from './APIService'
import './Strike.css'
import Hello from './Hello'
function ArticleList(props) {


    const deleteArticle = (article) => {
        APIService.DeleteArticle(article.id)
        .then(() => props.deleteArticle(article))

    }

    const strikeArticle = (article) => {
        
    }
    




    return (
        <div>
            
            {props.articles && props.articles.map(article => {
            return (
                <div key = {article.id}>
                    <button className='btnarticle' onClick = {() => strikeArticle(article)}>{article.taskdesc}</button>
                    <p>{article.tasktime}</p>
                    <p>{article.taskdate}</p>
                    {/* <p>{article.tasktime}</p> */}

                    <div className = "row"> 
                      <div className = "col">
                          <button className = "btn btn-danger" onClick = {() => deleteArticle(article)}>
                              Delete
                          </button> 

                      </div>

                    </div>
                    <hr/>

                </div>    
            )
        })}
      
            
        </div>
    )
}

export default ArticleList
