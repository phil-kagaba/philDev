import { useState } from "react";

const Home = ({name, age }) => {

    const [lists,setLists] = useState([
            { name:"scott",class:"p1",age:30,id:1 },
            { name:"bruce",class:"p1",age:30,id:2 },
            { name:"kora",class:"p1",age:30,id:3 },
            { name:"rasta",class:"p1",age:30,id:4 },
            { name:"scott",class:"p1",age:30,id:5 },
    ]) 

    const remove = (id) => {
        const newList = lists.filter(list=> list.id !== id)
        setLists(newList)
    }

    return ( 
        <>
        <h1 className="text-3xl uppercase text-red-100">all students</h1>
        <div className="items-center h-96 overflow-y-scroll">
            
            {lists.map((list, index)=>(
                <div className="border-b-2" key={index}>
                    <h1 className="text-red-600 font-bold">{list.name}</h1>
                    <p>has {list.age} years old</p>
                    <button className="text-red-900 border hover:bg-gray-100 ml-[10%]" onClick={()=> remove(list.id)}>remove a student</button>
                </div>
                
            ))}
        </div>
        <div>
            <h1 className="font-bold text-3xl">props to be displayed here</h1>
            <p>Hey!{name}, you're {age}</p>
        </div>
        </>
    );
}
 
export default Home;