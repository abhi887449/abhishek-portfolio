import React from 'react'
import avatar from '../images/abhishek-avatar.jpg'
import github from '../images/github-logo.png'
import codechef from '../images/codechef-logo.png'
import hackerrank from '../images/hackerrank-logo.png'
import leetcode from '../images/leetcode-logo.png'
import linkedin from '../images/linkedin-logo.png'

const About = () => {
  return (
    <div className='flex flex-col h-fit w-auto font-serif bg-blue-500 text-white mt-10'>
      <h1 className='content-center m-auto mt-7 text-4xl font-bold text-white'>ABOUT</h1>
      <div className="w-36 h-[1px] bg-white m-auto mt-3 mb-2">
        <div className="w-11 h-[3px] mt-[-1px] bg-orange-400 m-auto"></div>
      </div>
      <div className='m-auto w-auto flex flex-col justify-center content-center lg:flex-row lg:mb-16 lg:mt-12'>
      <div className="p-3 m-auto mt-2 mb-1 w-auto lg:mr-28">
        <img src={avatar} alt="avatar" className='h-60 w-60 rounded-full border-white border-[5px] border-solid' />
      </div>
      <div className="pl-6 m-auto break-words flex justify-center content-center flex-col">
        <h1 className='text-2xl font-bold mt-2 mb-1 text-white lg:text-3xl'>Web Development & Artificial Intelegence</h1>
        <ul className='text-md'>
          <li className='m-2'><strong>Phone:</strong>  <span className=''>+91-8874491885</span></li>
          <li className='m-2'><strong>Email:</strong>  <span className=''>abhisheksingh9793510@gmail.com</span></li>
          <li className='m-2'><strong>Website:</strong>  <span className=''><a href="/" target="_blank" rel="noopener noreferrer">www.github-abhi887449.io</a></span></li>
          <li className='m-2'><strong>Address:</strong>  <span className=''>Jonhiya, Sahjanwa, Gorakhpur, Uttar Pradesh, India (273209)</span></li>
        </ul>
        <div className='flex flex-row mb-12'>
          <a className='h-10 w-10 mt-3 m-1 bg-white rounded-full sm:hover:translate-y-1 ease-in-out' href="https://github.com/abhi887449" target="_blank" rel="noopener noreferrer"><img className='h-6 rounded-2xl m-2' src={github} alt="github" /></a>
          <a className='h-10 w-10 mt-3 m-1 bg-white rounded-full sm:hover:translate-y-1 ease-in-out' href="https://www.linkedin.com/in/abhi887449/" target="_blank" rel="noopener noreferrer"><img className='h-6 rounded-2xl m-2' src={linkedin} alt="github" /></a>
          <a className='h-10 w-10 mt-3 m-1 bg-white rounded-full sm:hover:translate-y-1 ease-in-out' href="https://leetcode.com/abhi887449/" target="_blank" rel="noopener noreferrer"><img className='h-6 rounded-2xl m-2' src={leetcode} alt="github" /></a>
          <a className='h-10 w-10 mt-3 m-1 bg-white rounded-full sm:hover:translate-y-1 ease-in-out' href="https://www.codechef.com/users/abhishek8874" target="_blank" rel="noopener noreferrer"><img className='h-6 rounded-2xl m-2' src={codechef} alt="github" /></a>
          <a className='h-10 w-10 mt-3 m-1 bg-white rounded-full sm:hover:translate-y-1 ease-in-out' href="https://www.hackerrank.com/abhi887449" target="_blank" rel="noopener noreferrer"><img className='h-6 rounded-2xl m-2' src={hackerrank} alt="github" /></a>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About
