import React,{ useState } from "react";
import Menu from "../components/Menu";
import {useHistory} from "react-router-dom"
import { getDatabase,child,onValue, ref, set,get} from "firebase/database";

const Home = () =>{

    const [item, setItem] = useState("Pizza")
    const [error, setError] = useState("")
    const [data, setData] = useState([])
    const [favorite, setFavorite] = useState([])
    const history = useHistory()

console.log(data,item)
    React.useEffect(()=>{
        console.log("Shsj")
        fetch(`https://api.spoonacular.com/food/products/search?query=${item}&apiKey=1c7177ef6f8e45619a139d760cc50f3c`) 
        .then(response => response.json())
        .then(data => {
            if(data.status == "failure"){
                setError(data.message)
            }else{
                setError("")
            setData(data.products)
            }
        }
        )
        .catch((error) => {
            console.log("sjhsjhs")
            console.error('Error:', error);
          });
    

    },[item])

    const AddToFavorite = (itemId,user) => {
        console.log(itemId,user)

        if(!user?.id)  history.push("/login")
        const db = getDatabase();
        set(ref(db, 'favorite/'), {
          userID: user.id,
          itemId
          
        });
      }
        // const dbRef = ref(getDatabase());
        //     get(child(dbRef, `favorite`)).then((snapshot) => {
               
        //     }).catch((error) => {
        //         console.error(error);
        //     })

    // }
    return <>

   <section id="process" className="menu-care">
         <div className="container">
           <div className="row session-title">

            <select class="form-select" onChange = {(e)=> {setItem(e.target.value)}} aria-label="Default select example">
                <option value="Pizza">Pizza</option>
                <option value="Burger">Burger</option>
                <option value="Biryani">Biryani</option>
            </select>
    
           </div>
            <div className="row">
                {error ? <p className="text-danger">{error}</p> : ""}
                 {data?.map((obj,idx)=>{
                    return (<Menu title={obj.title} id = {obj.id} image={obj.image} AddToFavorite={AddToFavorite}/>)
                 })}
                
            
            </div>
            
             
         </div>
     </section>
    </>
}

export default Home;