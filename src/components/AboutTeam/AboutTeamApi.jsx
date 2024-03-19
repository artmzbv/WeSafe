import axios from "axios";
import React, {useEffect, useState} from "react";

export default function TeamApi({post}){
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
        getImage();
    }, [post])

    return(
        <>
         <div className='team__card'>
            {featuredImage && <img className='team__photo' src={featuredImage} alt={post.title.rendered}/>}
            <h2 className='team__name'>{post.title.rendered}</h2>
            {/* <p className='team__description'>{post.excerpt.rendered}</p> */}
            <div className='team__description' dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} /> 
            </div>
        </>
        )
} 

{/* <div key={person.name} className='team__card'>
<img className='team__photo' src={person.src} alt={person.name}/>
<h2 className='team__name'>{person.name}</h2>
<p className='team__profession'>{person.profession}</p>
<p className='team__description'>
{person.description}
</p>
</div> */}