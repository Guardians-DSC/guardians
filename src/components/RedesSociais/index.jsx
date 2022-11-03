import React from "react";
import {BsGithub, BsInstagram, BsLinkedin} from 'react-icons/bs'
import { Link } from "react-router-dom";
import {RedesSociaisContainer} from './styles'

const ICON_COLOR = "var(--light-blue)";

const RedesSociais = ({instagramUrl, linkedinUrl, githubUrl}) => {
    return(
        <RedesSociaisContainer>
            <Link to={instagramUrl} target="_blank">
                <BsInstagram color={ICON_COLOR}/>
            </Link>
            <Link to={linkedinUrl} target="_blank">
                <BsLinkedin color={ICON_COLOR}/>
            </Link>
            <Link to={githubUrl} target="_blank">
                <BsGithub color={ICON_COLOR}/>
            </Link>
        </RedesSociaisContainer>
    )
};

export default RedesSociais;