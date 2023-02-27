import React from 'react'
import abhishek from '../images/abhishek.png'
import github from '../images/github-logo.png'
import codechef from '../images/codechef-logo.png'
import hackerrank from '../images/hackerrank-logo.png'
import leetcode from '../images/leetcode-logo.png'
import linkedin from '../images/linkedin-logo.png'
import coder from '../images/coder-intro.png'
const Intro = () => {
  return (
    <>
      <div id='home' className="bg-blue-500 h-fit w-auto font-serif">
        <span className='bg-[hsla(0,0%,100%,.15)] h-40 w-40 absolute rounded-full left-[-4vw] bottom-auto'></span>
        <span className='bg-[hsla(0,0%,100%,.15)] h-28 w-28 absolute rounded-full top-[20vh] right-[4vw]'></span>
        <span className='bg-[hsla(0,0%,100%,.15)] h-16 w-16 absolute rounded-full top-[50vh] right-[30vw]'></span>
        <span className='bg-[hsla(0,0%,100%,.15)] h-40 w-40 sm:absolute rounded-full top-[70vh] lg:top-[50vh] right-[40vw]'></span>
        <span className='bg-[hsla(0,0%,100%,.15)] h-11 w-11 absolute rounded-full top-[20vh] right-[4vw]'></span>
        <span className='bg-[hsla(0,0%,100%,.15)] h-16 w-16 absolute rounded-full top-[30vh] left-[20vw]'></span>
        <span className='bg-[hsla(0,0%,100%,.15)] h-28 w-28 absolute rounded-full top-[80vh] right-[5vw]'></span>
        <span className='bg-[hsla(0,0%,100%,.15)] h-28 w-28 absolute rounded-full top-[60vh]  lg:top-[50vh] right-[50vw]'></span>
        <div className="flex flex-row ml-5">
          <img src={abhishek} alt="Abhi" className='h-32 p-3' />
        </div>
        <div className='flex flex-col md:flex-row md:w-auto justify-center content-center'>
          <div className='text-white m-7 flex justify-center content-center flex-col md:w-[600px]'>
            <h1 className='text-4xl font-bold mt-7 mb-4 md:text-6xl'>Hi, I'm Abhishek</h1>
            <p className='text-lg w-11/12 md:text-xl'>I am a college student pursuing B.Tech in Computer Science and Engineering. I am passionate about web development and Artificial Intelligence. I have created some projects related to web development and working on Artificial Intelligence.
            </p>
            <div className='sm:hover:translate-y-1 ease-in-out flex flex-row text-md font-semibold h-11 w-48 bg-green-500 rounded-lg m-1 mt-4'>
              <span className="p-2 material-symbols-outlined">
                description
              </span>
              <a href="https://drive.google.com/file/d/1DRo7CEDi-8PajV2mKSb2WiBAFhoX44co/view?usp=share_link" target="_blank" rel="noopener noreferrer" className='pt-2'>SEE MY RESUME</a>
            </div>
            <div className='flex flex-row'>
              <a className='h-10 w-10 mt-3 m-1 bg-white rounded-full sm:hover:translate-y-1 ease-in-out' href="https://github.com/abhi887449" target="_blank" rel="noopener noreferrer"><img className='h-6 rounded-2xl m-2' src={github} alt="github" /></a>
              <a className='h-10 w-10 mt-3 m-1 bg-white rounded-full sm:hover:translate-y-1 ease-in-out' href="https://www.linkedin.com/in/abhi887449/" target="_blank" rel="noopener noreferrer"><img className='h-6 rounded-2xl m-2' src={linkedin} alt="github" /></a>
              <a className='h-10 w-10 mt-3 m-1 bg-white rounded-full sm:hover:translate-y-1 ease-in-out' href="https://leetcode.com/abhi887449/" target="_blank" rel="noopener noreferrer"><img className='h-6 rounded-2xl m-2' src={leetcode} alt="github" /></a>
              <a className='h-10 w-10 mt-3 m-1 bg-white rounded-full sm:hover:translate-y-1 ease-in-out' href="https://www.codechef.com/users/abhishek8874" target="_blank" rel="noopener noreferrer"><img className='h-6 rounded-2xl m-2' src={codechef} alt="github" /></a>
              <a className='h-10 w-10 mt-3 m-1 bg-white rounded-full sm:hover:translate-y-1 ease-in-out' href="https://www.hackerrank.com/abhi887449" target="_blank" rel="noopener noreferrer"><img className='h-6 rounded-2xl m-2' src={hackerrank} alt="github" /></a>
            </div>
          </div>
            <div className='m-auto md:m-0'>
              <img src={coder} alt="coder" />
            </div>
        </div>
      </div>
    </>
  )
}

export default Intro
