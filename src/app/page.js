"use client";

import Image from 'next/image';
import ProjectCard from '@/components/ProjectCard';
import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';
import ExperienceCard from '@/components/ExperienceCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import UniWorkCard from "@/components/UniWorkCard";
import { JetBrains_Mono } from 'next/font/google';
import React, {useEffect} from 'react';
import TechStack from '@/components/TechStack';
import {motion}  from 'framer-motion';
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] });
import Head from 'next/head';
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Allow repeated animations
    });
    AOS.refresh(); // Refresh animations after load or navigation
  }, []);
  
  const expenseTrackerDescription = "A fullstack app with a Spring Boot backend for tracking expenses, featuring JWT-based authentication, BCrypt password hashing, PostgreSQL integration, and a layered architecture, complete with a Streamlit frontend";
  const expenseTrackerLink = "https://github.com/omavashia2005/expenseTracker";
  
  const chromaLiteDesc = "A simple, custom neural network trained on 1,900+ synthetically generated chromagrams to classify Western musical scales"
  const chromaLiteLink = "https://github.com/omavashia2005/ChromaLite"

  const contractAuthorDesc = "Fullstack AI-driven contract generation and review web application built with the Tiptap rich text editor, React.js and Python (FastAPI WebSockets, LiteLLM, Dify.AI)"
  const contractAuthorLink = "https://github.com/omavashia2005/contract-author"

  const L = "https://github.com/omavashia2005/Rainfall-Prediction-using-ML"


  const internshipDescription = "Developed a full-stack AI-driven contract generation and review system using React.js, Python (FastAPI WebSockets, LiteLLM). Integrated Dify.ai with Tiptap for seamless UX and real-time rich text editing. Reduced LLM response time from 16s to <2s by implementing response token streaming through web sockets.";
  return (
    <div className={jetbrainsMono.className}>

    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href='/favicon.png'></link>

    </Head>

     <section  id='home' />
      <Navbar />
      <section  id='home' />
      <main className="p-8 pt-50">
        <section className="flex flex-col md:flex-row items-center justify-center gap-4 p-4">
        <h1 className="text-3xl md:text-5xl font-bold"> 
          {"print('Hello, World!')"}<span className="caret">▌</span>
        </h1>
        <Image src="/fav.JPG" width={450} height={450} alt="Pic" className="w-full max-w-xs md:max-w-md" />
        </section>

      



        {/* ---------------- ABOUT -------------------- */}
      <section id='about'></section>
      
        <section data-aos="fade-up" className='my-40 min-h-screen text-center'>
          
        <div className="max-w-7xl mx-auto px-8 text-center">
        <h1 className="text-3xl">{"Hi! I'm Om."}</h1> <br/>
        <h1 className="text-3xl font-bold text-center">

        <span className="inline-block min-h-[2.5rem] w-[250px] sm:w-[300px] md:w-[400px] align-middle">
          <Typewriter
            words={['Software Engineer', 'Fullstack Developer', 'AI Enthusiast']}
            loop
            typeSpeed={100}
            deleteSpeed={70}
            delaySpeed={1000}
          />
        </span>
        </h1> <br/>

        <p className='font-medium text-gray-400'>
        {"I'm also a Computer Science junior at Arizona State University’s Ira A. Fulton Schools of Engineering. Currently, I’m a Software Engineering Intern at IP Author, where I’m harnessing"} {" "}
        <span className='bg-white text-black font-bold'>large language models (LLMs) to reimagine patenting.</span> {" "}
        My passion lies in {" "}
        <span className='bg-white text-black font-bold'>backend & API development and building scalable, impactful software.</span> {" "}
        I also enjoy working with frontend technologies and continuously expanding my skill set. <br/> <br/>
        Off the screen, I enjoy working out, hold a Grade 5 electronic keyboard certification from Trinity College London, and am always exploring new tools and frameworks. Feel free to connect with me at{" "}
        <span className='bg-white text-black font-bold'>oavashia@asu.edu! </span>
      </p>


    
        </div>

         {/* ---------------- STACK -------------------- */}
         <section className='text-center py-10'>
          <a href="/Om_Avashia_Resume.pdf" download="Om_Kashyap_Resume.pdf" className='inline-flex items-center'>
            <span className='ml-2 bg-white text-black rounded px-3 py-1'>Download Resume</span>
          </a>
      </section>

         <section className="overflow-hidden py-8 bg-black-50 my-20">
            
            <div className='text-center'>
            <h1 className="text-3xl">Tech Stack</h1> <br/>
          </div>
      <motion.div
        className="flex gap-8"
        animate={{ x: ['0%', '-50%'] }} // Moves left by 50% width
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        style={{ width: 'max-content', display: 'flex' }}
      >
        <TechStack
          techStack={[
            { name: "Java", logo: "https://www.vectorlogo.zone/logos/java/java-icon.svg" },
            { name: "Spring Boot", logo: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg" },
            { name: "Python", logo: "https://www.vectorlogo.zone/logos/python/python-icon.svg" },
            { name: "PyTorch", logo: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg" },
            { name: "NumPy", logo: "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg" },
            { name: "Pandas", logo: "https://pandas.pydata.org/static/img/pandas_mark.svg" },
            { name: "Matplotlib", logo: "https://matplotlib.org/_static/images/logo2.svg" },
            { name: "JS", logo: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg" },
            { name: "React.js", logo: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" },
            { name: "Vite", logo: "https://www.vectorlogo.zone/logos/vitejsdev/vitejsdev-icon.svg" },
            { name: "Next", logo: "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg" },
            { name: "HTML", logo: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg" }, 
            { name: "CSS", logo: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon~old.svg" },
            { name: "PostgreSQL", logo: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg" },
            { name: "Git", logo:"https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"}
          ].concat([
            { name: "Java", logo: "https://www.vectorlogo.zone/logos/java/java-icon.svg" },
            { name: "Spring Boot", logo: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg" },
            { name: "Python", logo: "https://www.vectorlogo.zone/logos/python/python-icon.svg" },
            { name: "PyTorch", logo: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg" },
            { name: "NumPy", logo: "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg" },
            { name: "Pandas", logo: "https://pandas.pydata.org/static/img/pandas_mark.svg" },
            { name: "Matplotlib", logo: "https://matplotlib.org/_static/images/logo2.svg" },
            { name: "JS", logo: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg" },
            { name: "React.js", logo: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" },
            { name: "Vite", logo: "https://www.vectorlogo.zone/logos/vitejsdev/vitejsdev-icon.svg" },
            { name: "Next", logo: "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg" },
            { name: "HTML", logo: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg" }, 
            { name: "CSS", logo: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon~old.svg" },
            { name: "PostgreSQL", logo: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg" },
            { name: "Git", logo:"https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"}
          ])} 
        />
      </motion.div>
    </section>

        </section>        

    

    {/* ---------------- EXPERIENCE -------------------- */}
      <section id='experience'></section>
      <br/> <br/>
      <section data-aos="fade-up" className='text-left my-40'>
      <section data-aos="fade" className='text-center'>
        <h1 className="text-3xl">Experience</h1> <br/>
        </section>
      <ExperienceCard 
        company={"IP Author"} 
        title={"Software Engineering Intern"} 
        location={"San Mateo, CA"}  
        link={"https://ipauthor.com/"}
        techStack={[
          { name: "React.js", logo: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" },
          { name: "JS", logo: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg" },
          { name: "HTML", logo: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"}, 
          { name: "CSS", logo: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon~old.svg"},
          { name: "Python", logo: "https://www.vectorlogo.zone/logos/python/python-icon.svg" },
          { name: "Vite", logo: "https://www.vectorlogo.zone/logos/vitejsdev/vitejsdev-icon.svg" },
          { name: "Git", logo:"https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"}
        ]}
        /> 
        </section>
      
      {/* ---------------- PROJECTS -------------------- */}

      <section id='projects'></section>
      <section data-aos="fade-up" className='my-40 text-left'>
        <div className='text-center'>
        <section data-aos="fade-up">
          <h1 className="text-3xl">Projects</h1> <br/>
        </section>
        </div>
        
        <ProjectCard 

          title={"Contract Author (internship project)"}
          description={contractAuthorDesc}
          link={contractAuthorLink}
          techStack={[
            { name: "React.js", logo: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" },
            { name: "JS", logo: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg" },
            { name: "HTML", logo: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"}, 
            { name: "CSS", logo: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon~old.svg"},
            { name: "Python", logo: "https://www.vectorlogo.zone/logos/python/python-icon.svg" },
            { name: "Vite", logo: "https://www.vectorlogo.zone/logos/vitejsdev/vitejsdev-icon.svg" },

          ]}
          />

          
        <ProjectCard 
        title={"Expense Tracker"} 
        description={expenseTrackerDescription} 
        link={expenseTrackerLink}
        techStack={[
          { name: "Java", logo: "https://www.vectorlogo.zone/logos/java/java-icon.svg" },
          { name: "Python", logo: "https://www.vectorlogo.zone/logos/python/python-icon.svg" },
          { name: "Spring Boot", logo: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg" },
          { name: "PostgreSQL", logo: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg" },
          { name: "JWT", logo: "https://svgmix.com/uploads/44dd3e-jwt-icon.svg" },
          { name: "IntelliJ IDEA", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" },
        ]}
        />
      <br/>
        
      <ProjectCard 
        title={"ChromaLite"} 
        description={chromaLiteDesc} 
        link={chromaLiteLink} 
        techStack={[
          { name: "Python", logo: "https://www.vectorlogo.zone/logos/python/python-icon.svg" },
          { name: "PyTorch", logo: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg" },
          { name: "NumPy", logo: "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg" },
          { name: "Pandas", logo: "https://pandas.pydata.org/static/img/pandas_mark.svg" },
          { name: "Matplotlib", logo: "https://matplotlib.org/_static/images/logo2.svg" },
        ]}
      />    
    <br/>

    <ProjectCard 
        title={"Rainfall Prediciton using Machine Learning"} 
        description={"A machine learning pipeline built from scratch to predict rainfall"} 
        link={L} 
        techStack={[
          { name: "Python", logo: "https://www.vectorlogo.zone/logos/python/python-icon.svg" },
          { name: "NumPy", logo: "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg" },
          { name: "Pandas", logo: "https://pandas.pydata.org/static/img/pandas_mark.svg" },
          { name: "sklearn", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg"}
        ]}
      />   
      </section>

      {/* ---------------- CONTACT -------------------- */}

      <section id='contact' data-aos="fade-up" className="my-40 text-center">
  <h1 className="text-3xl mb-4">Contact</h1>
  <div className="flex justify-center gap-4">
    
    <a href='https://www.linkedin.com/in/omavashia/'>
    <Image src="https://www.vectorlogo.zone/logos/linkedin/linkedin-tile.svg" width={40} height={40} alt="LinkedIn" />
    </a>
    <a href='mailto:oavashia@asu.edu'>
    <Image src="https://www.vectorlogo.zone/logos/gmail/gmail-tile.svg" width={40} height={40} alt="Mail" />
    </a>
    

  </div>
</section>

      
      <Footer />
      </main> 
    </div>

  )
}