import React, {useEffect, useState} from 'react';
import './Intro.css';
import SafeBox from "../../images/safebox.jpeg"
import { Link } from "react-router-dom";
import  axios from 'axios'
import Lala from './Lala'

export default function Intro() {
    const [posts, setPosts] = useState([])
    // const [featuredImage, setFeaturedImage] = useState()
    // console.log(featuredImage)

    const fetchPosts = () =>[
        axios
          .get("https://wesafe.store/wp-json/wp/v2/posts")
          .then((res) => {
            setPosts(res.data);
            console.log(res.data)
          })
    ]

    useEffect(() => {
        fetchPosts()
    }, [])

    // console.log(posts[0]._links["wp:featuredmedia"][0].href)
    // console.log(posts[0].content.rendered)

    // useEffect(({post}) => {
    //     getImage(post)
    // },[post])

    // console.log(posts[0])
    
    return(
        <>
        <section className='intro'>
            <div className='intro__text'>
                <h1 className='intro__title'>Leader Européen d'Épargne en Matériaux Critiques</h1>  
                {/* <h1 className='intro__title'>Leader Europeen</h1>
                <h1 className='intro__title'>d'Epargne</h1>
                <h1 className='intro__title'>Metaux Critiques</h1> */}
                <h2 className='intro__description'>Créer du patrimoine hors banques, hors système</h2>
                <Link to="/contact-us">
                <button className='intro__button'>Contactez-nous</button>
                </Link>
            </div>
            <div className="intro__picture" src={SafeBox}></div>
            {/* <img src={'https://wesafe.store/wp-content/uploads/2024/02/logo-banniere-bleu-En.jpg'}></img> */}
            <div>
                {posts.map((item) => (
                    // return(
                     <Lala post={item} />
                    //  )
                ))}
            </div>
        </section>
        </>
    )
}