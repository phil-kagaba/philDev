import { useEffect, useState } from "react";

const Others = () => {
    const[data, setData] = useState([])
    // const[error, setError] = useState(null)

    useEffect(()=>{
        const fechDAta = async() => {
            try{
                const items = await fetch('/json/db.json')
                if(items.ok){
                    console.log('Fetched successfuly!!')
                }
                const json = await items.json()
                setData(json)
            }catch(error){
                console.log('an error occured'+error)
            }
        }
        fechDAta();
    })
    return (  
        <div>
            <h1 className="font-bold text-2xl">Other more users </h1>


            <div>{data.map((datas, index)=>(
                <div  className="border-b-2 py-7 font-semibold" key={index}>{datas.name} who live in {datas.city} with {datas.age} </div>
            ))}</div>

            
            <p className="text-red-400 text-xl mt-44">these data are been Fetched from the json file</p>
            
        </div>
    );
}
 
export default Others