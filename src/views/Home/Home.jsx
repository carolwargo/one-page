import React from 'react';
import FenceBackground from '../../assets/images/FenceBackground.png';
const Home = () => {
    return (
        <main style={{backgroundImage:{FenceBackground}}}>
        <h1>Home</h1>
<div className='row'>
    <div className='col' id='#what'>What we do</div>
    <div className='col' id='#why'>Why we do it</div>
    <div className='col' id='#features'>Features</div>
    <div className='col' id='#pricing'>Pricing</div>
</div>

        <div className='' id='what'>
            <h3>What we do...</h3>
        </div>
        
        <div className='' id='why'>
            <h3>Why we do it... over</h3>
            
            <ul>
<li>
    
</li>
            </ul>
        </div>


        <div className='' id='why'>
            <h3>Features</h3>
            
            <ul>
<li>
    
</li>
            </ul>
        </div>



        <div className='' id='why'>
            <h3>Pricing</h3>
            
            <ul>
<li>
    
</li>
            </ul>
        </div>
        </main>
    );
    }   

export default Home;