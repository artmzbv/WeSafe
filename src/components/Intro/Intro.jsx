import React, {useEffect, useState} from 'react';
import './Intro.css';
import SafeBox from "../../images/safebox.jpeg"
import { Link } from "react-router-dom";
import  axios from 'axios'

export default function Intro() {
    const [posts, setPosts] = useState([])
    // const [featuredImage, setFeaturedImage] = useState()

    // const fetchPosts = () =>[
    //     axios
    //       .get("http://localhost/wordpress/wp-json/wp/v2/posts")
    //       .then((res) => {
    //         setPosts(res.data);
    //       })
    // ]

    // const getImage = () => {
    //     axios
    //     .get(posts?._links["wp:featuredmedia"][0]?.href)
    //     .then((res) => {
    //         setFeaturedImage(res.data.source_url)
    //     })
    // }
    // useEffect(() => {
    //     getImage()
    // },[])
  
    // useEffect(() => {
    //     fetchPosts()
    // }, [])

    // console.log(posts[1].content.rendered)
    
    return(
        <>
        <section className='intro'>
            <div className='intro__text'>
                <h1 className='intro__title'>Leader Européen d'Épargne en Matériaux Critiques</h1>  
                {/* <h1 className='intro__title'>Leader Europeen</h1>
                <h1 className='intro__title'>d'Epargne</h1>
                <h1 className='intro__title'>Metaux Critiques</h1> */}
                <h2 className='intro__description'>Créer du patrmoine hors banques, hors système</h2>
                <Link to="/contact-us">
                <button className='intro__button'>Contactez-nous</button>
                </Link>
            </div>
            <img className="intro__picture" src={SafeBox}></img>
            <div>
                {/* {posts.map((post) =>{
                    <div>
                    {post.title.rendered}
                    </div>
                })} */}
            </div>
        </section>
        </>
    )
}