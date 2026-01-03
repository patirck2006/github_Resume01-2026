import React from 'react'

function Myself() {
  return (
    <>
    
    <div className="bg-black ">
    <div className=" px-24 py-8">
    <p className="text-2xl text-sky-500 font-semibold pb-10 ">Hello there!<br /></p>
    <p className="text-8xl text-white font-bold">I'm<br /></p>
    <p className="text-8xl text-sky-500 font-bold">Web_Developer<br /></p>
    </div>
    


    <div className='flex justify-between px-25 py-8  '>
    <div className="w-200 h-auto   " >
    <p className='text-4xl text-sky-500 font-semibold pb-20'>I'm Frontend Engineer</p>
    <p className="text-gray-400 text-justify font-light  indent-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus soluta vitae quibusdam officia eum laboriosam fugit, magnam recusandae corporis architecto fugiat est mollitia, aliquid, a dolor temporibus ex non impedit. Minima ad recusandae consequatur, nisi rerum veritatis velit quo natus dicta cum adipisci beatae in enim fuga laboriosam alias ipsum, neque saepe. Assumenda consequuntur esse magnam magni perferendis id, velit laudantium ducimus ipsum eum vitae expedita fugit possimus maiores necessitatibus sequi soluta eligendi quas aliquid deserunt porro libero. Id harum nesciunt magni expedita autem. Laboriosam praesentium corporis quisquam quam deleniti sequi placeat quia porro? Pariatur autem sequi ad maiores tenetur laborum odio, sit voluptas optio est perferendis beatae nam deserunt consequatur, rem dolores. Quo illo placeat deserunt quasi molestiae eaque voluptas culpa commodi. Similique excepturi error iste id commodi, sit doloremque ipsam, vero repellat unde harum at cumque ipsum explicabo accusamus voluptate a enim dolorem nisi quasi quaerat, saepe sunt.</p>
    </div>
    <div>
        <img className='w-150 h-auto rounded-lg border-2 border-sky-950 'src=".\public\image-372252bb-aa47-4975-808b-4d0f15e85060-85-2560-1440.jpeg"  alt="#" />
    </div>
    </div>

    <div className='flex justify-start gap-6 px-25 py-8     '>
        <div className="bg-sky-950 rounded-2xl w-60 h-40 p-10 ">
            <p className="text-center text-4xl text-sky-500 font-bold pb-3">10+</p>
            <p className='text-center text-gray-400 font-semibold ' >Projects Completed</p>
            </div>
        <div className="bg-sky-950 rounded-2xl w-60 h-40 p-10 ">
            <p className="text-center text-4xl text-sky-500 font-bold pb-3">2+</p>
            <p className='text-center text-gray-400 font-semibold '>Years Experience</p>
        </div>
        <div className="bg-sky-950 rounded-2xl w-60 h-40 p-10 ">
            <p className=" text-center text-4xl text-sky-500 font-bold pb-3 ">15+</p>
            <p className='text-center text-gray-400 font-semibold ' >Happy Clients</p>    
        </div>
    </div>
    </div>
    </>
  )
}

export default Myself