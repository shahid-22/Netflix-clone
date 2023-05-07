import React ,{useEffect,useState} from 'react'
import "./rowpost.css"
import axios from '../../axios'
import { API_KEY,imageUrl } from '../../constants/constants'


function Rowpost(props) {
    const [movies,setMovie]=useState([])
    useEffect(()=>{
      axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then((response)=>{
        console.log("hiiii",response.data);
        setMovie(response.data.results)
      }).catch(err=>{
        window.alert("somethig wrong")
      })
    },[])
  return (
       <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {
                movies.map((obj)=>
             <img  className={props.issmall?'smallerpost':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="" />
                )
                }
                
            </div>
        </div>
  )
}

export default Rowpost
