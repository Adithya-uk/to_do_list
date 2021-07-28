import React from 'react'
import APIService from './APIService'

function ArticleList(props) {


    const deleteArticle = (article) => {
        APIService.DeleteArticle(article.id)
        .then(() => props.deleteArticle(article))

    }

    




    return (
        <div>
            
            {props.articles && props.articles.map(article => {
            return (
                <div key = {article.id}>
                    <p className = 'strikeoff'>{article.taskdesc}</p>
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
