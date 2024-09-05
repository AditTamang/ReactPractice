import React from 'react'
import Button from './button'
import './Home.css'
import './Button.css'

const Home = () => {
    return(
        <div class='container'>
        <div class='card'>
            <img src='src/image/png-transparent-computer-icons-twitter-logo-logo-monochrome-black-removebg-preview.png' alt='Twitter' class='icon'/>
            <h2>TWITTER</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quam dignissimos, consectetur ad nulla ducimus, nam nesciunt at quod voluptas sapiente ipsa eius laudantium? Dolor, eligendi consectetur.</p>
            <Button text='READ MORE'/>

        </div>

        <div class='instagram'>
            <img src='src/image/instagram-logo-white-on-black-removebg-preview.png' alt='Instagram' class='icon'/>
            <h2>INSTAGRAM</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, error eveniet cum beatae odit nam consectetur aliquid hic, iusto natus maiores soluta laborum sunt ea deserunt.HI My name is Adit Tamang.</p>
            <button class='insta-btn'>READ MORE</button>
        </div>

        <div class='card'>
            <img src='src/image/e8c9828387de2a83e5469a95bc6d8574-removebg-preview.png' alt='Youtube' class='icon youtube'/>
            <h2>YOUTUBE</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, error eveniet cum beatae odit nam consectetur aliquid hic, iusto natus maiores soluta laborum sunt ea deserunt.HI My name is Adit Tamang.</p>
            <Button text='READ MORE'/>
        </div>
    </div>
    )
}

export default Home