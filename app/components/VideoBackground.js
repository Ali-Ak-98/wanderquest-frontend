const VideoBackground = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                poster="/images/thumbnail.jpg"
            >
                <source src="/timelaps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black/80" data-testid="video-overlay"></div>
        </div>
    );
};

export default VideoBackground;
