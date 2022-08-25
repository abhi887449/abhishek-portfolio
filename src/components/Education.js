import React from 'react'

const Education = () => {
    return (
        <div className='flex flex-col h-fit w-auto mb-2 font-serif'>
            <h1 className='content-center m-auto mt-7 text-4xl font-bold text-gray-600'>EDUCATION</h1>
            <div className="w-36 h-[1px] bg-gray-500 m-auto mt-3 mb-6">
                <div className="w-11 h-[3px] mt-[-1px] bg-blue-600 m-auto"></div>
            </div>
            <div className="flex flex-col sm:flex-row m-auto flex-wrap justify-center content-center xl:w-[1200px]">
                <div className="h-64 w-80 rounded-lg text-gray-500 p-5 shadow-box mt-8 sm:ml-3 sm:mr-3">
                    <h1 className="m-1 text-lg font-bold ml-6 text-blue-600">Bundelkhand University</h1>
                    <p className="m-1 mt-4 text-sm ml-6">Bachelor of Technology in Computer Science and Technology</p>
                    <p className="m-1 mt-3 text-sm ml-6 bg-blue-600 text-white w-fit p-[2px] rounded-sm">September 2020 - Present</p>
                    <p className="m-1 mt-2 text-sm ml-6 bg-sky-500 text-white w-fit p-[2px] rounded-sm"> CGPA: 8.23 (3/8 sem)</p>
                    <div className='flex flex-row ml-5'>
                    </div>
                </div>
                <div className="h-64 w-80 rounded-lg text-gray-500 p-5 shadow-box mt-8 sm:ml-3 sm:mr-3">
                    <h1 className="m-1 text-lg font-bold ml-6 text-blue-600">Little Flower School</h1>
                    <p className="m-1 mt-4 text-sm ml-6">Intermediate (12<sup>th</sup>) - Mathematics</p>
                    <p className="m-1 mt-3 text-sm ml-6 bg-blue-600 text-white w-fit p-[2px] rounded-sm">April 2019 - July 2020</p>
                    <p className="m-1 mt-2 text-sm ml-6 bg-sky-500 text-white w-fit p-[2px] rounded-sm"> Percentage: 90.8%</p>
                    <div className='flex flex-row ml-5'>
                    </div>
                </div>
                <div className="h-64 w-80 rounded-lg text-gray-500 p-5 shadow-box mt-8 sm:ml-3 sm:mr-3">
                    <h1 className="m-1 text-lg font-bold ml-6 text-blue-600">Oxford Public School</h1>
                    <p className="m-1 mt-4 text-sm ml-6">Matriculation (10<sup>th</sup>) - Mathematics</p>
                    <p className="m-1 mt-3 text-sm ml-6 bg-blue-600 text-white w-fit p-[2px] rounded-sm">April 2017 - May 2018</p>
                    <p className="m-1 mt-2 text-sm ml-6 bg-sky-500 text-white w-fit p-[2px] rounded-sm"> Percentage: 77.2%</p>
                    <div className='flex flex-row ml-5'>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education
