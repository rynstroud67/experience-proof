import React, {useState, useEffect} from 'react';
import '../../config/style.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Memphis from '../../assets/ryn-corporate-memphis.png'

export default function HomeComponent() {


    return (
        <div class="main-container">
            <div class="row">
                <div class="launch">
                    <div class="margin-3">
                        <div class="title text">
                            i am qualified to skip class
                        </div>
                        <div class="subtitle">
                            an expose by ryn stroud
                        </div> 
                    </div>
                    <div class="text body-text">
                        Look, I know this seems a bit much for a student to show their work for possible experiential credit. I know. 
                        But I have been known to be extra since I was merely a lad. I have worked hard to harbor this reputation and 
                        I won't let some <strong>university</strong> take it from me.
                    </div>
                    <div class="margin-3 subtitle">
                        so there.
                    </div>
                    <Link to="/experience-proof/programming" class="link-txt">
                        <div class="subtitle">see why i call myself extra
                        <FontAwesomeIcon icon={faArrowRight} size="xs" transform="right-4 down-3" />
                        </div>
                    </Link>
                </div>
                <img src={Memphis} alt="Ryn as a corporate memphis" class="side-design" />
            </div>
        </div>
    )
}