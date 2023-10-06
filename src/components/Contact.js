import { useState ,useEffect } from "react";
import Axios from "axios";
function Tontact()
{
    const[name,setName]=useState("Rishabh");
    const [data,setData] = useState([]);
    useEffect(()=>{
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            if(res.status===200)
            {
                console.log(res.data);
                setData(res.data);
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert("Error occured" + err))
    },[])
    const ContactDetails = () => {
        return data.map((val)=>{
            return <p>{val.name} - {val.phone}</p>
        })
    }

    return(
        <div>
            <h1>The owner of the page is {name}</h1>
            <button onClick={()=> setName("Ravi")}>Change</button>
            {ContactDetails()}
        </div>
    )



}
export default Tontact