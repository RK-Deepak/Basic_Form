
import { useState } from 'react';
import './App.css';
import emailjs from '@emailjs/browser';

function App() {
  const [formData,setFormdata]=useState(
    {fname:"",
    lname:"",
    email:"",
    country:"",
    street:"",
    city:"",
    state:"",
    code:"",
    comments:false,
    candidates:false,
    offers:false,
 
    mode:""

  } )
  // console.log(formData);
  
  function changeHandler(e)
  {
    const {name,type,checked,value}=e.target;
    setFormdata((prevdata)=>
    {
      return(
        {
          ...prevdata,
          [name]:type==="checkbox"?checked:value
        }
      )
    });
    
  }

  function submitHandler(event)
  {
   event.preventDefault();
   emailjs.send('gmailx','template_oq29zin', formData, 'qtRHO8BiiBw8CG8AE')
   .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
   }, (err) => {
      console.log('FAILED...', err);
   });
  }
  return (
    <div className="App w-full min-h-screen ">
      <form onSubmit={submitHandler} className="w-[80%] max-w-[700px] border border-slate-700 flex flex-col mx-auto mt-[20px] p-2 gap-2">
        <div className="flex flex-col gap-2 items-start">
          <label htmlFor='fname'>First Name:</label>
          <input type='text' placeholder="fname" name='fname' onChange={changeHandler} id="fname" value={formData.fname} className="border-2 border-slate-500 w-full placeholder:px-2" />
        </div >
        <div className=" flex flex-col gap-2 items-start" > 
          <label htmlFor='lname'>Last Name:</label>
          <input type='text' placeholder='lname' name='lname'
          onChange={changeHandler} id='lname' value={formData.lname} className="border-2 border-slate-500 w-full placeholder:px-2"/>

        </div>
        <div className="flex flex-col gap-2 items-start">
          <label htmlFor='email'>Email Address:</label>
          <input type='email' placeholder='email' name='email'
          onChange={changeHandler} id='email' value={formData.email} className="border-2 border-slate-500 w-full placeholder:px-2"/>

        </div>
        <div className=" flex flex-col gap-2 items-start">
          <label htmlFor='country'>Country:</label>
          <select onChange={changeHandler} name='country' value={formData.country} id="country " className='w-[40%] placeholder:px-2 border-2 border-slate-500'>
            <option value="">Select Nation</option>
            <option value="India">India</option>
            <option value="Nepal">Nepal</option>
            <option value="USA">USA</option>
            <option value="Singapore">Singapore</option>

          </select>
        </div>
        <div className=" flex flex-col gap-2 items-start">
          <label htmlFor='street'>Street:</label>
          <input type='text' onChange={changeHandler} name="street" value={formData.street} id='street' placeholder='abcd' className="border-2 border-slate-500 w-full placeholder:px-2"/>
        </div>
        <div className=" flex flex-col gap-2 items-start">
          <label htmlFor='street'>City:</label>
          <input type='text' onChange={changeHandler} name="city" value={formData.city} id='city' placeholder='Delhi' className="border-2 border-slate-500 w-full placeholder:px-2"/>
        </div>
        <div className="flex flex-col gap-2 items-start">
          <label htmlFor='state'>State/Proviences</label>
          <select id="state" onChange={changeHandler} name='state' value={formData.state}  className='w-[40%] placeholder:px-2 border-2 border-slate-500'>
            <option value="">Select State</option>
            <option value="Bengal">Bengal</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Rajasthan">Rajasthan</option>

          </select>
        </div>
        <div className=" flex flex-col gap-2 items-start">
          <label htmlFor='code'>Zip code</label>
          <input type="tel" maxLength="6" onChange={changeHandler} id="code" value={formData.code} name='code' placeholder='12345' className="border-2 border-slate-500 placeholder::px-2"/>
            
         
        </div>
      
          <fieldset className='border-2 border-slate-950 px-2 flex flex-col gap-3'>
            <legend className='text-start px-2'>By Email:</legend>
             <div className='flex gap-2 items-center flex-start '>
              <input type='checkbox' id="comments" checked={formData.comments} name='comments' onChange={changeHandler}/>
              <div className='flex flex-col items-start'>
              <label htmlFor='comments'>Comments</label>
              <p>This is the comments whichh u wamt to setup</p>
              </div>
            </div>
            <div className='flex gap-2 items-center flex-start'>
              <input type='checkbox' id='candidates' name='candidates' onChange={changeHandler} checked={formData.candidates}/>
              <div className='flex flex-col items-start'>
                <label htmlFor='candidates'>Candidates</label>
                <p>The candidates who want to participate check here</p>
              </div>
            </div>
            <div className='flex gap-2 items-center flex-start'>
              <input type='checkbox' id="offers" name="offers" onChange={changeHandler} checked={formData.offers}/>
              <div className='flex flex-col items-start'>
                 <label htmlFor='offers'>Offers</label>
                <p>The oofes which we gave u</p>
              </div>
            </div>
          </fieldset>
          <fieldset className='border-2 border-slate-950 px-2 flex flex-col gap-3 items-start'>
           
            <legend className='text-start px-2'>Push Notification</legend>
          
            <p>This is push notifcation section</p>
              
            
    
       
       <div className='flex gap-2 items-center flex-start '>
        <input type='radio' name='mode' onChange={changeHandler} id='radio1'   value="Everything" checked={formData.mode==="Everything"}/>
        <label htmlFor='radio1'>Everything</label>
       </div>
       <div className='flex gap-2 items-center flex-start '>
        <input type='radio' name='mode' onChange={changeHandler} id="radio2" value="Push Notification" checked={formData.mode==="Push Notification"}/>
        <label htmlFor='radio2'>Push Notification</label>
       </div>
         <div className='flex gap-2 items-center flex-start '>
        <input type='radio' name='mode' onChange={changeHandler} id="radio3" value="No Notification" checked={formData.mode==="No Notification"}/>
        <label htmlFor='radio2'>No Notification</label>
       </div>

     
          </fieldset>

          <button className='px-3 py-2 bg-blue-500 rounded-md  font-bold w-fit self-center' >Submit</button>
       

      </form>
    </div>
  );
}

export default App;
