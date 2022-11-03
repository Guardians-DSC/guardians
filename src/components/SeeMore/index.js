import React from "react";
import { Wrapper, Text } from "./styles";
import { useTranslation } from 'react-i18next';
import { BsArrowDownCircle } from "react-icons/bs";


const SeeMore = () => {

    const { t } = useTranslation();

    return(
        <>
        <Wrapper>
            <Text>
                { t ('home.seeMore')}
            </Text>
            <BsArrowDownCircle/>
        </Wrapper>
        </>
    )
};

export default SeeMore;