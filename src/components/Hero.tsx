import React, {useState, useEffect} from 'react';
import LogoDark from '../assets/img/logo-dark.svg'
import LogoWhite from '../assets/img/logo-white.svg'
import {BsFillSunFill, BsMoonFill, BsCheck} from 'react-icons/bs'
import Girl from '../assets/img/girl.png'

const Hero = () => {

    const [theme, setTeheme] = useState('light')

    useEffect(()=> {
        if(localStorage.getItem('theme') === null){
            localStorage.setItem('theme', 'light')
        }
    },[])

    useEffect(()=> {
        const html : any = document.querySelector('html')
        if (localStorage.getItem('theme') === 'dark'){
            html.classList.add('dark')
            setTeheme('dark')
        } else {
            html.classList.remove('dark')
            setTeheme('light')
        }
    },[theme])



    const handleSwitch = () => {
       if (localStorage.getItem('theme') === 'light'){
           setTeheme('dark');
           localStorage.setItem('theme', 'dark')
       } else {
           setTeheme('light')
           localStorage.setItem('theme', 'light')
       }
    }


    return (
        <section
            className='min-h-[740px] w-full bg-heroLight bg-cover bg-center bg-no-repeat overflow-hidden dark:bg-heroDark'>
            <button
                onClick={handleSwitch}
                className='p-4 bg-accent text-white rounded-full w-12 h-12 flex justify-center items-center'>
                {theme === 'light' ? <BsMoonFill/> : <BsFillSunFill/>}
            </button>
        </section>
    );
};

export default Hero;