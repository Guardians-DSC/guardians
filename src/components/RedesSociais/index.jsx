import React from "react";
import {BsGithub, BsInstagram, BsLinkedin} from 'react-icons/bs'
import { Link } from "react-router-dom";
import {RedesSociaisContainer} from './styles'

const ICON_COLOR = "var(--light-blue)";

const RedesSociais = ({instagramUrl, linkedinUrl, githubUrl}) => {
    return(
        <RedesSociaisContainer>
            <Link to={instagramUrl}>
                <BsInstagram color={ICON_COLOR} size={'5vh'}/>
            </Link>
            <Link to={linkedinUrl}>
                <BsLinkedin color={ICON_COLOR} size={'5vh'}/>
            </Link>
            <Link to={githubUrl}>
                <BsGithub color={ICON_COLOR} size={'5vh'}/>
            </Link>
        </RedesSociaisContainer>
    )
};

export default RedesSociais;