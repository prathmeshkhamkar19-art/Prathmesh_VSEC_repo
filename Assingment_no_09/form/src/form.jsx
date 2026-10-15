import { useNavigate } from "react-router-dom";

function form({setName , setRollno , setDep})
{
    const navigate = useNavigate();
    
    return(
        <div>
            <input
            type="text"
            placeholder=" Enter Name : "
            onChange={ (e) => setName(e.target.value)}
            />

            <input 
            type="number"
            placeholder="Enter your Rollnumber :"
            onChange={ (e) => setRollno(e.target.value)}
            />

            <input
            type="text"
            placeholder="Enter Department name :"
            onChange={ (e) => setDep(e.target.value)}
            />

            <button onClick={() => navigate("/result")}>
                Submit
            </button>

        </div>
    );
}

export default form;