import React, {useEffect, useState} from 'react';
import '../style/MainView.css';
import {DONT_LAUGH_PICTURE, DONT_LAUGH_PROFILE, TALKING_TECH_PROFILE, TALKING_TECH_PICTURE} from '../images/PictureConstants'

function MainPage() {

    return (
        <html>
        <body>
        <input className="search-bar" type="text" placeholder="Search"/>
        <div className="video-grid">
            <div className="video-preview">
                <div className="thumbnail-row">
                    <img className="thumbnail" src={TALKING_TECH_PICTURE} alt="Thumbnail"/>
                </div>
                <div className="video-info-grid">
                    <div className="channel-picture">
                        <img className="profile-picture" src={TALKING_TECH_PROFILE} alt="wow"/>
                    </div>
                    <div className="video-info">
                        <p className="video-title">Talking Tech and AI with Google CEO Sundar Pichai!</p>
                        <p className="video-author">Marques Brownlee</p>
                        <p className="video-stats">3.4M views &#183; 6 months ago</p>
                    </div>
                </div>
            </div>

            <div className="video-preview">
                <div className="thumbnail-row">
                    <img className="thumbnail" src={DONT_LAUGH_PICTURE} alt="Thumbnail"/>
                </div>
                <div className="video-info-grid">
                    <div className="channel-picture">
                        <img className="profile-picture" src={DONT_LAUGH_PROFILE} alt="wow"/>
                    </div>
                    <div className="video-info">
                        <p className="video-title">Try Not To Laugh Challenge #9</p>
                        <p className="video-author">Markiplier</p>
                        <p className="video-stats">19M views  &#183; 4 years ago</p>
                    </div>
                </div>
            </div>

            <div className="video-preview">
                <div className="thumbnail-row">
                    <img className="thumbnail" src={TALKING_TECH_PICTURE} alt="Thumbnail"/>
                </div>
                <div className="video-info-grid">
                    <div className="channel-picture">
                        <img className="profile-picture" src={TALKING_TECH_PROFILE} alt="wow"/>
                    </div>
                    <div className="video-info">
                        <p className="video-title">Talking Tech and AI with Google CEO Sundar Pichai!</p>
                        <p className="video-author">Marques Brownlee</p>
                        <p className="video-stats">3.4M views &#183; 6 months ago</p>
                    </div>
                </div>
            </div>

            <div className="video-preview">
                <div className="thumbnail-row">
                    <img className="thumbnail" src={DONT_LAUGH_PICTURE} alt="Thumbnail"/>
                </div>
                <div className="video-info-grid">
                    <div className="channel-picture">
                        <img className="profile-picture" src={DONT_LAUGH_PROFILE} alt="wow"/>
                    </div>
                    <div className="video-info">
                        <p className="video-title">Try Not To Laugh Challenge #9</p>
                        <p className="video-author">Markiplier</p>
                        <p className="video-stats">19M views  &#183; 4 years ago</p>
                    </div>
                </div>
            </div>

            <div className="video-preview">
                <div className="thumbnail-row">
                    <img className="thumbnail" src={TALKING_TECH_PICTURE} alt="Thumbnail"/>
                </div>
                <div className="video-info-grid">
                    <div className="channel-picture">
                        <img className="profile-picture" src={TALKING_TECH_PROFILE} alt="wow"/>
                    </div>
                    <div className="video-info">
                        <p className="video-title">Talking Tech and AI with Google CEO Sundar Pichai!</p>
                        <p className="video-author">Marques Brownlee</p>
                        <p className="video-stats">3.4M views &#183; 6 months ago</p>
                    </div>
                </div>
            </div>

            <div className="video-preview">
                <div className="thumbnail-row">
                    <img className="thumbnail" src={DONT_LAUGH_PICTURE} alt="Thumbnail"/>
                </div>
                <div className="video-info-grid">
                    <div className="channel-picture">
                        <img className="profile-picture" src={DONT_LAUGH_PROFILE} alt="wow"/>
                    </div>
                    <div className="video-info">
                        <p className="video-title">Try Not To Laugh Challenge #9</p>
                        <p className="video-author">Markiplier</p>
                        <p className="video-stats">19M views  &#183; 4 years ago</p>
                    </div>
                </div>
            </div>
        </div>

        </body>
        </html>
    );
}

export default MainPage;
