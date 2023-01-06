
import { useContext } from "react";
import { loginContext } from "../context/context";
const Menu = ( {title, image, id, AddToFavorite }) => {
    const { user} = useContext(loginContext);
  console.log(user,"user")
    return <>
    <div  className="col-md-3 col-sm-6 round-5 mt-5">
       <div className="bg-red p-3">
        <div className="bg-red">
            <img src={image} height="250" width="100%" alt="image"/>
            <p height="20"  className="overflow-hidden mt-3 bold text-white">{title}</p>
            <button onClick={(e)=> {AddToFavorite(id,user)}} ><i class="fa-solid fa-heart text-white"></i></button>
        </div>
        </div>
    </div>
    </>
}
export default Menu;
