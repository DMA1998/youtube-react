import YouTubeVideo from "./YouTubeVideo";
import React from "react";
import '../style/youtube/Video.css';
import {
    TALKING_TECH_PROFILE,
    TALKING_TECH_PICTURE,
    DONT_LAUGH_PICTURE,
    DONT_LAUGH_PROFILE
} from "../images/PictureConstants";


export const YouTubeVideoContainer: React.FC = () => {
    return (
        <div className="video-grid">
            <YouTubeVideo
                previewImage={TALKING_TECH_PICTURE}
                profileImage={TALKING_TECH_PROFILE}
                title='Talking Tech and AI with Google CEO Sundar Pichai!'
                author='Marques Brownlee'
                stats='3.4M views &#183; 6 months ago'
            />

            <YouTubeVideo
                previewImage={DONT_LAUGH_PICTURE}
                profileImage={DONT_LAUGH_PROFILE}
                title='Try Not To Laugh Challenge #9'
                author='Markiplier'
                stats='19M views  &#183; 4 years ago'
            />

            <YouTubeVideo
                previewImage={TALKING_TECH_PICTURE}
                profileImage={TALKING_TECH_PROFILE}
                title='Talking Tech and AI with Google CEO Sundar Pichai!'
                author='Marques Brownlee'
                stats='3.4M views &#183; 6 months ago'
            />

            <YouTubeVideo
                previewImage={DONT_LAUGH_PICTURE}
                profileImage={DONT_LAUGH_PROFILE}
                title='Try Not To Laugh Challenge #9'
                author='Markiplier'
                stats='19M views  &#183; 4 years ago'
            />

            <YouTubeVideo
                previewImage={TALKING_TECH_PICTURE}
                profileImage={TALKING_TECH_PROFILE}
                title='Talking Tech and AI with Google CEO Sundar Pichai!'
                author='Marques Brownlee'
                stats='3.4M views &#183; 6 months ago'
            />

            <YouTubeVideo
                previewImage={DONT_LAUGH_PICTURE}
                profileImage={DONT_LAUGH_PROFILE}
                title='Try Not To Laugh Challenge #9'
                author='Markiplier'
                stats='19M views  &#183; 4 years ago'
            />
        </div>
    );
}

export default YouTubeVideoContainer;