import React from 'react'
import './Footer.css'
import {BsFillPhoneFill} from 'react-icons/bs'
import {GoMail} from 'react-icons/go'
const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-left'>
          <h1>IT Artashat</h1>
          <p>ՀՀ Ք․Արտաշատ</p>
          <p>Օգոստոսի 23 115/3</p>
          <BsFillPhoneFill /> +374 94-10-76-94
          <GoMail /> itartashat@gmail.com
        </div>
        <p>inerneti linker</p>
        <div className='footer-left'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12233.525313907989!2d44.54032809310016!3d39.95522627235312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406acb1cfaf55b4d%3A0xca47bfc1822f55fc!2sIT%20Artashat!5e0!3m2!1sru!2s!4v1676457920861!5m2!1sru!2s" width="600" height="450" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </footer>
  )
}

export default Footer