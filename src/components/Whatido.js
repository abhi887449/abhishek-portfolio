import React from 'react'
import wicon from '../images/work-icon.png'
import htmllogo from '../images/html-logo.png'
import csslogo from '../images/css-logo.png'
import javascriptlogo from '../images/javascript-logo.png'
import tailwindlogo from '../images/tailwind-logo.png'
import bootstraplogo from '../images/bootstrap-logo.png'
import reactlogo from '../images/react-logo.png'
import mongodblogo from '../images/mongodb-logo.png'
import nodelogo from '../images/node-logo.png'
import npmlogo from '../images/npm-logo.png'
import javalogo from '../images/java-logo.png'
import cpplogo from '../images/cpp-logo.png'
import pythonlogo from '../images/python-logo.png'
import seleniumlogo from '../images/selenium-logo.jpg'
import beautifulSouplogo from '../images/beautifulSoup-logo.jpg'
const Whatido = () => {
    return (
        <div className='flex flex-col h-fit w-auto mb-2 font-serif'>
            <h1 className='content-center m-auto mt-7 text-4xl font-bold text-gray-600'>WHAT I DO</h1>
            <div className="w-36 h-[1px] bg-gray-500 m-auto mt-3 mb-6">
                <div className="w-11 h-[3px] mt-[-1px] bg-blue-600 m-auto"></div>
            </div>
            <div className="h-fit w-auto flex flex-col justify-center content-center mt-7 mb-7">
                <div className="flex flex-col text-gray-600 ml-7 mr-3">
                    <h1 className="text-2xl lg:text-3xl font-bold m-auto">Full Stack Development</h1>
                    <div className='m-auto sm:w-auto text-md mt-3'><img className='h-7 break-words inline' src={wicon} alt="work" />Building responsive Single Page Apps (SPA) & Progressive web apps (PWA) using React.js.</div>
                    <div className='m-auto sm:w-auto text-md mt-3'><img className='h-7 break-words inline' src={wicon} alt="work" />Building DBMS based SPA using React js and Mongodb.</div>
                    <div className='m-auto sm:w-auto text-md mt-3'><img className='h-7 break-words inline' src={wicon} alt="work" />Building RESTful APIs using Express.js and Node.js.</div>
                    <div className='m-auto sm:w-auto text-md mt-3'><img className='h-7 break-words inline' src={wicon} alt="work" />Building responsive designs using Tailwind CSS.</div>
                </div>
                <div className="mt-5 flex flex-row flex-wrap justify-center content-center ml-5 mr-3 mb-5">
                    <img className='h-16 p-2 m-2 rounded-full shadow-box' src={htmllogo} alt="html" />
                    <img className='h-16 p-2 m-2 rounded-full shadow-box' src={csslogo} alt="css" />
                    <img className='h-16 p-2 m-2 rounded-full shadow-box' src={javascriptlogo} alt="javascript" />
                    <img className='h-16 p-2 m-2 rounded-full shadow-box' src={reactlogo} alt="react" />
                    <img className='h-16 p-2 m-2 rounded-full shadow-box' src={tailwindlogo} alt="tailwind css" />
                    <img className='h-16 p-2 m-2 rounded-full shadow-box' src={bootstraplogo} alt="bootstrap" />
                    <img className='h-16 p-2 m-2 rounded-full shadow-box' src={mongodblogo} alt="mongodb" />
                    <img className='h-16 p-2 m-2 rounded-full shadow-box' src={nodelogo} alt="node js" />
                    <img className='h-16 p-2 m-2 rounded-full shadow-box' src={npmlogo} alt="npm" />
                </div>
                <div className="flex flex-col text-gray-600 ml-7 mr-3 mt-8">
                    <h1 className="text-2xl lg:text-3xl font-bold m-auto"><span className='block sm:inline'>Machine Learnning &</span><span> Artificial Intelligence</span></h1>
                    <div className='m-auto sm:w-auto text-md mt-3'><img className='h-7 break-words inline' src={wicon} alt="work" />Web Scraping using python libraries - BeautifulSoup and Selenium.</div>
                    <div className='m-auto sm:w-auto text-md mt-3'><img className='h-7 break-words inline' src={wicon} alt="work" />Nowadays learning how to build Artificial Intelligence</div>
                </div>
                <div className="mt-5 flex flex-row flex-wrap justify-center content-center ml-5 mr-3 mb-5">
                    <img className='h-16 w-16 p-2 m-2 rounded-full shadow-box' src={pythonlogo} alt="python" />
                    <img className='h-16 w-16 p-2 m-2 rounded-full shadow-box' src={beautifulSouplogo} alt="beautifulSoup" />
                    <img className='h-16 w-16 p-2 m-2 rounded-full shadow-box' src={seleniumlogo} alt="selenium" />
                </div>
                <div className="flex flex-col text-gray-600 ml-7 mr-3 mt-8">
                    <h1 className="text-2xl lg:text-3xl font-bold m-auto">Competitive Programming</h1>
                    <div className='m-auto sm:w-auto text-md mt-3'><img className='h-7 break-words inline' src={wicon} alt="work" />Competitive Programming and DSA with C++ and Java.</div>
                    <div className='m-auto sm:w-auto text-md mt-3'><img className='h-7 break-words inline' src={wicon} alt="work" />Completed 200+ questions on Leetcode and 100+ questions on CodeChef.</div>
                </div>
                <div className="mt-5 flex flex-row flex-wrap justify-center content-center ml-5 mr-3">
                    <img className='h-16 w-16 p-2 m-2 rounded-full shadow-box' src={cpplogo} alt="cpp" />
                    <img className='h-16 p-2 m-2 rounded-full shadow-box' src={javalogo} alt="java" />
                </div>
            </div>
        </div>
    )
}

export default Whatido
