import { useEffect } from 'react'
import { newsApi } from '../../api/api'
import classes from './News.module.css'




type NewsPropsType = {

}

export const News = () => {


     useEffect(()=> {
      newsApi.getNews()
      .then((res)=> console.log(res))
     },[])

    return <div className={classes.newsContainer}>
         
    </div>
}



