import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import { BsChatFill } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    
    <div className="header__socials">

        <a href="https://www.linkedin.com/in/souvik-maity-2003softwaredeveloper/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/Souvik8159" target="_blank" rel='noreferrer'><BsGithub/></a>
        <a href="https://github.com/Souvik8159" target="_blank" rel='noreferrer'><BsChatFill/></a>
    </div>
  )
}

export default HeaderSocials