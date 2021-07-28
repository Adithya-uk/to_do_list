

export default class APIService {


static DeleteArticle(id) {
    
    console.log(id)
    return fetch('/api/deletearticle/' + id ,{
        methods : 'DELETE',
        headers: {
            'Content-Type' : 'application/json'
        },
       
    }).then(response => response.json())
}
}