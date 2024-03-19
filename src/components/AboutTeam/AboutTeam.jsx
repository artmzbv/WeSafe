import React, {useEffect, useState} from 'react';
import './AboutTeam.css';
import {team} from '../../utils/utils'
import  axios from 'axios'
import TeamApi from './AboutTeamApi'

export default function AboutTeam() {
    
    const [team, setTeam] = useState([])

    const fetchPosts = () =>[
        axios
        .get("https://wesafe.store/wp-json/wp/v2/posts?category=equipe")
        .then((res) => {
            setTeam(res.data.sort((a, b) => a.id - b.id));
        })
    ]

    useEffect(() => {
        fetchPosts()
    }, [])

    // console.log('posts', team )

    return(
        <>
        <section className='team'>
            <h1 className='team__title'>Qui sommes-nous?</h1>
            <div className='team__container'>
            {team.map((person) => 
                <TeamApi key={person.id} post={person} />
                )}
            </div>
        </section>
        </>
    )
}