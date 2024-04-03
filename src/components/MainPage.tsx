import '../style/youtube/Video.css';
import '../style/youtube/Header.css';
import {
    DONT_LAUGH_PICTURE,
    DONT_LAUGH_PROFILE,
    TALKING_TECH_PROFILE,
    TALKING_TECH_PICTURE,
    CRAZY_TIK_TOKS_PICTURE,
    CRAZY_TIK_TOKS_PROFILE,
    THE_SIMPLEST_MATH_PICTURE,
    THE_SIMPLEST_MATH_PROFILE,
    KADANES_ALGORITHM_PICTURE,
    KADANES_ALGORITHM_PROFILE,
    ANYTHING_YOU_CAN_FIT_PICTURE,
    ANYTHING_YOU_CAN_FIT_PROFILE
} from '../images/PictureConstants'

const MainPage: React.FC = () => {
    /*
    * Header component
    * YouTubeVideoContainer component
    * */
    return (
        <html>
        <body>
        <div className="header">
            <div className="left-section">
                Left section
            </div>
            <div className="middle-section">
                <input className="search-bar" type="text" placeholder="Search"/>
            </div>
            <div className="right-section">
                Right section
            </div>
        </div>
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
                    <img className="thumbnail" src={CRAZY_TIK_TOKS_PICTURE} alt="Thumbnail"/>
                </div>
                <div className="video-info-grid">
                    <div className="channel-picture">
                        <img className="profile-picture" src={CRAZY_TIK_TOKS_PROFILE} alt="wow"/>
                    </div>
                    <div className="video-info">
                        <p className="video-title">Crazy Tik Toks Taken Moments Before DISASTER</p>
                        <p className="video-author">SSSniperWolf</p>
                        <p className="video-stats">12M views &#183; 1 year ago</p>
                    </div>
                </div>
            </div>

            <div className="video-preview">
                <div className="thumbnail-row">
                    <img className="thumbnail" src={THE_SIMPLEST_MATH_PICTURE} alt="Thumbnail"/>
                </div>
                <div className="video-info-grid">
                    <div className="channel-picture">
                        <img className="profile-picture" src={THE_SIMPLEST_MATH_PROFILE} alt="wow"/>
                    </div>
                    <div className="video-info">
                        <p className="video-title">The Simplest Math Problem No One Can Solve - Collatz Conjecture</p>
                        <p className="video-author">Veritasium</p>
                        <p className="video-stats">18M views  &#183; 4 months ago</p>
                    </div>
                </div>
            </div>

            <div className="video-preview">
                <div className="thumbnail-row">
                    <img className="thumbnail" src={KADANES_ALGORITHM_PICTURE} alt="Thumbnail"/>
                </div>
                <div className="video-info-grid">
                    <div className="channel-picture">
                        <img className="profile-picture" src={KADANES_ALGORITHM_PROFILE} alt="wow"/>
                    </div>
                    <div className="video-info">
                        <p className="video-title">Kadane's Algorithm to Maximum Sum Subarray Problem</p>
                        <p className="video-author">CS Dojo</p>
                        <p className="video-stats">519K views  &#183;  5 years ago</p>
                    </div>
                </div>
            </div>

            <div className="video-preview">
                <div className="thumbnail-row">
                    <img className="thumbnail" src={ANYTHING_YOU_CAN_FIT_PICTURE} alt="Thumbnail"/>
                </div>
                <div className="video-info-grid">
                    <div className="channel-picture">
                        <img className="profile-picture" src={ANYTHING_YOU_CAN_FIT_PROFILE} alt="wow"/>
                    </div>
                    <div className="video-info">
                        <p className="video-title">Anything You Can Fit In The Circle I’ll Pay For</p>
                        <p className="video-author">MrBeast</p>
                        <p className="video-stats">141M views &#183; 1 year ago</p>
                    </div>
                </div>
            </div>
        </div>

        </body>
        </html>
    );
}

export default MainPage;
