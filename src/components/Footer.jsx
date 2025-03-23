import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'

function Footer() {
  return (
    <div id="contact" className="border-t border-white p-10 text-white">
        <div className="pb-10">
        <h1 className="my-10 text-center text-4xl">Get In Touch</h1>
            <div className="text-center tracking-tighter">
                <p className="my-4">Imadol, Lalitpur</p>
                <p className="my-4">+977-9861612621</p>
                <a href="#" className="border-b">
                    siddharthasapkota03@gmail.com
                </a>
            </div>      
        </div>
        <div className="container mx-auto flex items-center justify-center space-x-4 text-white">
                <a href="https://www.linkedin.com/in/siddhartha-sapkota-476173216/" target="_blank" rel="noreferrer"><FaLinkedin size={32}/></a>
                <a href="https://www.instagram.com/sidspk69/" target="_blank" rel="noreferrer"><FaInstagram size={32} /></a>
                <a href="https://www.facebook.com/sidspk69" target="_blank" rel="noreferrer"><FaFacebookSquare size={32} /></a>
        </div>
        <p className="text-center mt-10">अक्षरातित 🙏</p>
    </div>
  )
}

export default Footer
