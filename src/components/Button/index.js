import React from "react";
import { useNavigate} from 'react-router-dom';
import { Wrapper } from "./styles";




const Button = ({ style, text}) => {

    const navigate = useNavigate();

    const navigateTo = (route) => {
        navigate(`/${route}`)
    }

    return(
        <Wrapper onClick={navigateTo}>
            <button
                style={style}
            >{text}
            </button>
        </Wrapper>
    )
};

export default Button;