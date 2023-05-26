import { useRef, useState } from "react"
import './AddUser.css'
const AddUser:React.FC<{
    getAllUserAxios: () => void
}> = (
    {
        getAllUserAxios
    }
) => {
    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');

    const passRef:any = useRef();
    const AddNewUser = async ()=> {
        console.log('passref',passRef)
        const newUser: any = {
            email,
            password,
            id: Math.random(),
            date: new Date()
        }
        console.table(
            newUser
        )

        //fetch call

        const response = await fetch('http://localhost:3001/add', {
            method: "POST", 
            headers: {
                'content-type':'application/json'
              },
            body: JSON.stringify(newUser) // body data type must match "Content-Type" header
          });
          console.log('jsonData',response)
        //   const jsonData = await response.json();
        
        //fetch call
       
        setEmail('');
        setPassword('')
    }

    const showPassword = () => {
        if(passRef.current){
            if(passRef.current.type == 'password'){

                passRef.current.type ='text'
            }else {

                passRef.current.type ='password'
            }
        }
    }
    return(
  <div className="form-group">
    <h1>Add new User</h1>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            
            <input 
            type="text" 
            id="email"
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            />
        </div >
        <div className="form-control">
            <label htmlFor="password">Password</label>
            
            <input 
            id="password"
            type="password" 
            value={password} 
            ref={passRef}
            onChange={e => setPassword(e.target.value)} 
            />
            <button onClick={showPassword}>eye</button>

            <button className="bt-add" onClick={AddNewUser}>Add</button>
        </div>
  </div>
    )
}

export default AddUser;