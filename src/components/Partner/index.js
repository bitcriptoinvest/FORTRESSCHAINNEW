import c98 from '../../assets/images/c98.png'

import fpt from '../../assets/images/fpt.png'

import guildfi from '../../assets/images/guildfi.png'
import hashed from '../../assets/images/hashed.png'


import ld from '../../assets/images/ld.png'
import { useState } from 'react'
const Wrap = styled.div`
.title {
        font-weight: 600;
        font-size: 40px;
        line-height: 42px;
        @media only screen and (max-width: 1000px) {
            font-size: 24px;
            line-height: 25px;
            margin: 0px 24px;
            text-align: center;
        }
        text-align: center;
        text-transform: capitalize;
        background: linear-gradient(108.46deg, #5ee6d0 12.51%, #bfc6ff 51.13%, #ffba69 87.49%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
div {
        margin: 0px auto;

        width: 1008px;
        display: flex;
        justify-content: space-between;
        align-items: center;
img {
            opacity: 0.6;
            transition: all 0.3s ease;
            margin-top: 35px;
            max-width: 130px
        }
img:hover {
            opacity: 1;
            -webkit-filter: drop-shadow(rgba(255, 255, 255, 0.6) 0px 0px 20px);
            filter: drop-shadow(rgba(255, 255, 255, 0.6) 0px 0px 20px);
        }
    }
    button {
        border: 1px solid #494c58;
        border-radius: 999px;
        background: transparent;
        color: #717582;
        padding: 10px 24px;
        cursor: pointer;
        margin: auto;
        display: flex;
        margin-top: 40px;
    }
    p {
        margin-top: 40px;
        color: #717582;
        text-align: center;
    }
    @media only screen and (max-width: 1000px) {
div {
            flex-wrap: wrap;
            width: unset;
            padding: 0px 14px;
            margin-top: 32px;
            justify-content: space-evenly;
img {
                transform: scale(0.8);
            }
        }
    }
        <Wrap>
            <h3 className='title'>Honored to be accompanied with</h3>
            <div>
                <img src={fpt} alt='' />
                <img src={hashed} alt='' />
                <img src={c98} alt='' />
                <img src={guildfi} alt='' />
                <img src={ld} alt='' />
            </div>


        </Wrap>
    )
}
