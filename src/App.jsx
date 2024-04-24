

import './index.css'

import NavbarSimple from '/src/Components/NavComponent'
// import TeckCarousel from '/src/Components/TeckCarousel'

import SocialsComponent from '/src/Components/SocialsComponent'


import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { FaNode } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";



import { Button, Card } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';
import { SimpleFooter } from './Components/SimpleFooter';
import { motion } from "framer-motion"

import imageOne from './assets/Screenshot 2024-04-14 211044.png'
import imageTwo from './assets/Screenshot 2024-04-14 211143.png'
import imageThree from './assets/Screenshot 2024-04-14 211233.png'


function App() {





  return (
    <>
      <div className='w-full h-full overflow-hidden bg-gray-300'>


        <div className='bg-transparent'>
          <NavbarSimple />
        </div>


        <section className='mt-20'>
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto">
            <div 
            
            className="flex w-full  justify-center ">
              <motion.img className='w-1/2 rounded-full h-auto border-2 border-black'
                src="../src/assets/myimage.png"
                alt="card-image"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="container grid w-full content-center place-items-center">
              <h1
              
              className=" font-bold text-center animate-bounce text-6xl">Hi</h1>
              <h2 className="text-6xl font-semibold text-center animate-pulse ">I'm Shivanjali</h2>
              <p className="text-gray-700 mt-4 text-1xl"> Third year engineering student at PICT,Pune </p>
              <Button className='py-2 px-10 rounded-full text-lg shadow-2xl mt-8' variant='gradient'>
                <NavLink to=''>
                  Contact me
                </NavLink>
              </Button>
            </div>
          </div>
        </section>


        <section className='mt-20' id='skills'>
          <div className="container mx-auto">
            <h1 className=' text-4xl font-extrabold uppercase underline text-center mb-20'>Technical Skills </h1>
            {/* <TeckCarousel /> */}
            <div className='flex items-center justify-center gap-20 flex-wrap'>
              <motion.div
              initial={{ opacity: 0, y:75 }}
              whileInView={{ opacity: 1, y:0 }}
              transition={{ duration: 0.5 }}
              >
              <TbBrandCpp className='text-7xl text-black' />
       
              </motion.div>
              <motion.div
              initial={{ opacity: 0, y:75 }}
              whileInView={{ opacity: 1, y:0 }}
              transition={{ duration: 0.5 }}
              >
              <IoLogoJavascript className='text-7xl text-black' />
              
              </motion.div>
              <motion.div
              initial={{ opacity: 0, y:75 }}
              whileInView={{ opacity: 1, y:0 }}
              transition={{ duration: 0.5 }}
              >
              <FaReact className='text-7xl text-black'/>
                
              </motion.div>
              <motion.div
              initial={{ opacity: 0, y:75 }}
              whileInView={{ opacity: 1, y:0 }}
              transition={{ duration: 0.5 }}
              >
                <SiTailwindcss className='text-7xl text-black' />
              </motion.div>
              <motion.div
              initial={{ opacity: 0, y:75 }}
              whileInView={{ opacity: 1, y:0 }}
              transition={{ duration: 0.5}}
              >
                <FaNode className='text-7xl text-black' />
              </motion.div>
              <motion.div
              initial={{ opacity: 0, y:75 }}
              whileInView={{ opacity: 1, y:0 }}
              transition={{ duration: 0.5 }}
              >
                <SiExpress className='text-7xl text-black' />
              </motion.div>
              <motion.div
              initial={{ opacity: 0, y:75 }}
              whileInView={{ opacity: 1, y:0 }}
              transition={{ duration: 0.5}}
              >
                <SiMongodb className='text-7xl text-black' />
              </motion.div>
            </div>
          </div>
        </section>

        <section id='projects'>
          <div className='container mx-auto mt-20'>
            <h1 className=' text-4xl font-extrabold uppercase underline text-center mb-20'>Projects</h1>
            <div className='flex flex-col items-center gap-20 justify-center'>
              <div className='flex items-start justify-center gap-20'>
                <Card className='shadow-2xl shadow-gray-600'>
                  <img src={imageOne} alt="" className='' />
                </Card>
                <div className='flex flex-col items-start gap-6 justify-start'>
                  <p className='text-lg font-medium text-black tracking-wider'>
                  CampusNotes connects you to a collaborative network of classmates, offering a treasure trove of organized and comprehensive notes for all your courses.
                  </p>
                  <div className='flex items-center gap-8'>
                    <Button size='md'>Know more</Button>
                    <Button variant='outlined' size='md'>Visit website</Button>

                  </div>
                </div>
              </div>

              <div className='flex flex-row-reverse items-start justify-center gap-20'>
                <Card className='shadow-2xl shadow-gray-600'>
                  <img src={imageTwo} alt="" className='' />
                </Card>
                <div className='flex flex-col items-start gap-6 justify-start'>
                  <p className='text-lg font-medium text-black tracking-wider'>
                  Billify is an innovative online billing platform designed specifically for restaurant owners. It simplifies the billing process by digitizing and automating every aspect, from order entry to payment collection
                  </p>
                  <div className='flex items-center gap-8'>
                    <Button size='md'>Know more</Button>
                    <Button variant='outlined' size='md'>Visit website</Button>

                  </div>
                </div>
              </div>

              <div className='flex items-start justify-center gap-20'>
                <Card className='shadow-2xl shadow-gray-600'>
                  <img src={imageThree} alt="" className='' />
                </Card>
                <div className='flex flex-col items-start gap-6 justify-start'>
                  <p className='text-lg font-medium text-black tracking-wider'>
                  Struggling to harness the full potential of your wind farm? We can help. Our platform uses advanced AI to predict power generation, optimize turbine performance, and deliver in-depth analytics. Unleash the wind's power and maximize your wind farm's potential.
                  </p>
                  <div className='flex items-center gap-8'>
                    <Button size='md'>Know more</Button>
                    <Button variant='outlined' size='md'>Visit website</Button>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='mt-20' id='contact'>
          <div className=" container mx-auto flex flex-col w-full">

            <h1 className=' text-4xl font-extrabold uppercase underline text-center mb-20 '>Socials </h1>
            <div className='self-center'>
              <SocialsComponent />
            </div>

          </div >
        </section >


        <section>
          <div className='container mx-auto py-16 mt-8'>
            <SimpleFooter />
          </div>
        </section>

      </div >

    </>
  )
}

export default App
