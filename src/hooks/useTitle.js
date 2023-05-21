import { useEffect } from "react"

const useTitle=(title)=> {

    useEffect(()=>{

        document.title= `Toy.fair | ${title}`

    },[title])
};


export default useTitle;