import axios from "axios";
import React, {useEffect, useState} from "react";

export default function Lala({post}){
    const [featuredImage, setFeaturedImage] = useState()
        const getImage = async () => {
            try {
                const response = await axios.get(post?._links["wp:featuredmedia"][0]?.href);
          
            if(response.data && response.data.source_url) {
            setFeaturedImage(response.data.source_url);
            }
        } catch(error) {
            console.log("Error -", error);
        }
    };

    useEffect(() => {
        getImage()
    }, [post])

    return(
        <>
            {featuredImage && <img src={featuredImage} alt={post.title.rendered}/>}
            <div style={{color:"white"}}>
            {post.title.rendered}
            </div>
        </>)
} 