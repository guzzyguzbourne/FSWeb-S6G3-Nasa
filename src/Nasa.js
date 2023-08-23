import React from "react";
import Image from "./Image.js";
import Video from "./Video.js";
import Arama from './Arama.js';
import styled from 'styled-components';

const Nasa = (props) => {
    const {arama, aramaHandler, veri} = props;

    const ContentsDiv = styled.div `
        width : 100%;
    `;

    return (
        <ContentsDiv>
            <Arama arama={arama} aramaHandler={aramaHandler} />
            {
                veri.media_type == "image"
                    ?
                    <Image url={veri.hdurl} />
                    :
                    <Video url={veri.url} />
            }

            <h2> {veri.title} </h2>
            <div>
                <p> {veri.copyright ? `copyright: ${veri.copyright}` : ""}</p>
                <p> {veri.date} </p>
            </div>
            <p>
                {veri.explanation}
            </p>

        </ContentsDiv>


    )
};

export default Nasa;