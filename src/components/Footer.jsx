import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

function Footer() {
  return (
    <div id="contact" className="bg-gray-800 p-10 text-white">
        <div className="border-b border-neutral-800 pb-10">
        <h1 className="my-10 text-center text-4xl">Get In Touch</h1>
            <div className="text-center tracking-tighter">
                <p className="my-4">Imadol, Lalitpur</p>
                <p className="my-4">+977-9828753172</p>
                <a href="#" className="border-b">
                    siddhartha.sapkota03@gmail.com
                </a>
            </div>      
        </div>
        <div className="container mx-auto flex items-center justify-center space-x-4 text-white">
                <a href="https://www.linkedin.com/in/siddhartha-sapkota-476173216/" target="_blank" rel="noreferrer"><FaLinkedin size={32}/></a>
                <a href="https://www.instagram.com/sidspk69/" target="_blank" rel="noreferrer"><FaInstagram size={32} /></a>
        </div>
    </div>
  )
}

export default Footer
