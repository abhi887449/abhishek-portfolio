import React from 'react'
import github from '../images/github-logo.png'

const Projects = () => {
    return (
        <div className='flex flex-col h-fit w-auto mb-2 font-serif'>
            <h1 className='content-center m-auto mt-7 text-4xl font-bold text-gray-600'>PROJECTS</h1>
            <div className="w-36 h-[1px] bg-gray-500 m-auto mt-3 mb-6">
                <div className="w-11 h-[3px] mt-[-1px] bg-blue-600 m-auto"></div>
            </div>
            <div className="flex flex-col sm:flex-row m-auto flex-wrap justify-center content-center xl:w-[1200px]">
                <div className="h-64 w-80 rounded-lg text-gray-500 p-5 shadow-box mt-8 sm:ml-3 sm:mr-3">
                    <h1 className="m-2 text-3xl mt-6 font-bold ml-6 text-gray-600">Portfolio</h1>
                    <p className="m-2 text-sm ml-6">A portfolio website created using React js, javascript and tailwindCSS</p>
                    <div className='flex flex-row ml-5'>
                    <a className='h-10 w-12 mt-2 m-1 bg-gray-700 rounded-lg sm:hover:translate-y-1 ease-in-out' href="https://github.com/abhi887449/abhishek-portfolio" target="_blank" rel="noopener noreferrer"><img className='h-9 rounded-2xl m-auto mt-[2px]' src={github} alt="github" /></a>
                    <a className='h-10 w-16 mt-2 m-1 bg-sky-500 rounded-lg sm:hover:translate-y-1 ease-in-out' href="https://abhi887449.github.io/abhishek-portfolio/" target="_blank" rel="noopener noreferrer"><p className='text-white text-lg mt-[5px] ml-2'>Demo</p></a>
                    </div>
                </div>
                <div className="h-64 w-80 rounded-lg text-gray-500 p-5 shadow-box mt-8 sm:ml-3 sm:mr-3">
                    <h1 className="m-2 text-3xl mt-6 font-bold ml-6 text-gray-600">Keeper</h1>
                    <p className="m-2 text-sm ml-6">A React App for making notes and setting remainders created using React js and mongodb database</p>
                    <div className='flex flex-row ml-5'>
                    <a className='h-10 w-12 mt-2 m-1 bg-gray-700 rounded-lg sm:hover:translate-y-1 ease-in-out' href="https://github.com/abhi887449/keeper" target="_blank" rel="noopener noreferrer"><img className='h-9 rounded-2xl m-auto mt-[2px]' src={github} alt="github" /></a>
                    <a className='h-10 w-16 mt-2 m-1 bg-green-600 rounded-lg sm:hover:translate-y-1 ease-in-out' href="https://youtu.be/kNDptZvMU6E" target="_blank" rel="noopener noreferrer"><p className='text-white text-lg mt-[5px] ml-3'>View</p></a>
                    </div>
                </div>
                <div className="h-64 w-80 rounded-lg text-gray-500 p-5 shadow-box mt-8 sm:ml-3 sm:mr-3">
                    <h1 className="m-2 text-3xl mt-6 font-bold ml-6 text-gray-600">NewsUpdates</h1>
                    <p className="m-2 text-sm ml-6">A News App created using React js and newsapi.This app can show different category news and also you can search custom news by using search option.</p>
                    <div className='flex flex-row ml-5'>
                    <a className='h-10 w-12 mt-2 m-1 bg-gray-700 rounded-lg sm:hover:translate-y-1 ease-in-out' href="https://github.com/abhi887449/NewsUpdates" target="_blank" rel="noopener noreferrer"><img className='h-9 rounded-2xl m-auto mt-[2px]' src={github} alt="github" /></a>
                    <a className='h-10 w-16 mt-2 m-1 bg-green-600 rounded-lg sm:hover:translate-y-1 ease-in-out' href="https://youtu.be/HAr1kpnvuKs" target="_blank" rel="noopener noreferrer"><p className='text-white text-lg mt-[5px] ml-3'>View</p></a>
                    </div>
                </div>
                <div className="h-64 w-80 rounded-lg text-gray-500 p-5 shadow-box mt-8 sm:ml-3 sm:mr-3">
                    <h1 className="m-2 text-3xl mt-6 font-bold ml-6 text-gray-600">Weather</h1>
                    <p className="m-2 text-sm ml-6">Weather app using Node, Express js, EJS , CSS and Openweathermap API to show current weather information of given city.</p>
                    <div className='flex flex-row ml-5'>
                    <a className='h-10 w-12 mt-2 m-1 bg-gray-700 rounded-lg sm:hover:translate-y-1 ease-in-out' href="https://github.com/abhi887449/Weather" target="_blank" rel="noopener noreferrer"><img className='h-9 rounded-2xl m-auto mt-[2px]' src={github} alt="github" /></a>
                    <a className='h-10 w-16 mt-2 m-1 bg-sky-500 rounded-lg sm:hover:translate-y-1 ease-in-out' href="https://rocky-brushlands-85533.herokuapp.com/" target="_blank" rel="noopener noreferrer"><p className='text-white text-lg mt-[5px] ml-2'>Demo</p></a>
                    </div>
                </div>
                <div className="h-64 w-80 rounded-lg text-gray-500 p-5 shadow-box mt-8 sm:ml-3 sm:mr-3">
                    <h1 className="m-2 text-3xl mt-6 font-bold ml-6 text-gray-600">Calculator</h1>
                    <p className="m-2 text-sm ml-6">Scientific Calculator using HTML, CSS and Javascript.</p>
                    <div className='flex flex-row ml-5'>
                    <a className='h-10 w-12 mt-2 m-1 bg-gray-700 rounded-lg sm:hover:translate-y-1 ease-in-out' href="https://github.com/abhi887449/Calculator" target="_blank" rel="noopener noreferrer"><img className='h-9 rounded-2xl m-auto mt-[2px]' src={github} alt="github" /></a>
                    <a className='h-10 w-16 mt-2 m-1 bg-sky-500 rounded-lg sm:hover:translate-y-1 ease-in-out' href="https://abhi887449.github.io/Calculator/index.html" target="_blank" rel="noopener noreferrer"><p className='text-white text-lg mt-[5px] ml-2'>Demo</p></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
