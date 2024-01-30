import React, { useState } from 'react'
import {ReactTyped} from "react-typed"


  



const Navbar = () => {

const [showCursor, setShowCursor] = useState(true);

  const toggleCursor = () => {
    setShowCursor((prevShowCursor) => !prevShowCursor);
  };

const [Looping, setLooping] = useState(true);

const toggleLooping = () => {
  setLooping((prevSetLooping) => !prevSetLooping);
};


  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const handleSubmit = (e) =>{
    e.preventDefault();
    fetch('http://44.204.45.216:3001',{
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })
      .then((res) => res.json())
      .then ((data) => setResponse(data.message));
  }
  
  return (
    <div className='App flex flex-col content-center justify-center max-w-screen-md h-screen m-auto'>
        <div className='flex lex-row mx-auto'>
        <h1 className='md:text-7xl border-red-600 drop-shadow-2xl text-green-600 font-bold text-4xl flex justify-center'>Chat</h1>
        <ReactTyped className='md:text-7xl drop-shadow-2xl text-green-600 font-bold text-4xl flex justify-center'strings={['bot', 'gift', 'date', 'idea']} typeSpeed={300} backSpeed={350} fadeOutDelay={500} loop={Looping} showCursor={showCursor}/></div>
        
        
        
        <form onSubmit={handleSubmit} className=' mx-auto my-4 flex flex-col w-full h-54 ' >
        <textarea className='resize-none flex content-center justify-center py-2  focus:outline-none m-14 px-5  bg-gray-800 max-h-[40px] min-h-[40px] rounded-2xl text-white 'type="text" placeholder='Wpisz pytanie' value={message}
        onChange={(e) => setMessage(e.target.value)}></textarea>
        <button  className="active:scale-110 duration-300 ease-in-out md:px-24 flex justify-center items-center bg-gray-800 text-gray-400 rounded-2xl px-16 h-10 mx-auto " type="submit" >Zapytaj!</button>
        </form>
        <ReactTyped className='flex justify-center content-center rounded-3xl shadow-md mx-5 p-4 text-center mt-10 text-green-400 bg-[#000025]' strings={[response]} showCursor={showCursor} typeSpeed={40} />
        <div className='flex justify-center content-center mt-16 active:scale-110 duration-300 ease-in-out '><button className="bg-gray-800 p-4 text-sm rounded-full text-gray-400"onClick={toggleCursor} >Ukryj kursor</button></div>
        
        </div>
        
  );
}

export default Navbar;