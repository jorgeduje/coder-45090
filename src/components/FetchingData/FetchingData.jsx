import React, { useEffect, useState } from 'react'

const FetchingData = () => {

    const [ posts, setPosts ] = useState([])

    let id = 20

    // const {id} = useParams()

    // let obj = {
    //     userId: 1,
    //     title: "este es un nuevo post",
    //     body: "aca va la descripcion del post bla bla "
    // }

    // OBTENER POST
    useEffect(()=>{

        const getData = fetch("https://jsonplaceholder.typicode.com/posts")
        
        getData
        .then( (res) => res.json())
        .then( (res) => setPosts(res) )
        .catch((err) => console.log(err))

    }, [])

    // CREAR UN POST

    // useEffect( ()=>{

    //     let createPost = fetch("https://jsonplaceholder.typicode.com/posts", {
    //         method: "POST",
    //         headers: {
    //             // "authorization": "dasdasFGSAFGASD12ewdASDASFaca",
    //             "Content-type": "aplication-json"
    //         },
    //         body: JSON.stringify( {
    //             userId: 1,
    //             title: "este es un nuevo post",
    //             body: "aca va la descripcion del post bla bla "
    //         } )


    //     })
        
    //     createPost
    //         .then( res => console.log("se creo el post: ",res))

    // }, [])

    useEffect( ()=>{

        let updatePost = fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: "PUT",
            headers: {
                // "authorization": "dasdasFGSAFGASD12ewdASDASFaca",
                "Content-type": "aplication-json"
            },
            body: JSON.stringify({
                userId: 1,
                title: "este se modifico",
                body: "aca va la descripcion del post bla bla "
            })


        })
        
        updatePost
            .then( res => console.log("se modifico el post: ",res))

    }, [])



    console.log(posts)

  return (
    <div>FetchingData</div>
  )
}

export default FetchingData