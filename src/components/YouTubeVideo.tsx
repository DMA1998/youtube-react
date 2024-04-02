import React from "react";

interface VideoStructure {
    previewImage: string,
    profileImage: string,
    title: string,
    author: string,
    stats: string;
}

export const YouTubeVideo: React.FC<VideoStructure> = ({ previewImage, profileImage, title, author, stats }) => {

    return (
        <div className="video-preview">
            <div className="thumbnail-row">
                <img className="thumbnail" src={previewImage} alt="Thumbnail"/>
            </div>
            <div className="channel-picture">
                <img className="profile-picture" src={profileImage} alt="wow"/>
            </div>
            <div className="video-info">
                <p className="video-title">{title}</p>
                <p className="video-author">{author}</p>
                <p className="video-stats">{stats}</p>
            </div>
        </div>
    );
}

export default YouTubeVideo;