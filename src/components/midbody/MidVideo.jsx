import  React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const MidVideo = () => {

    return (
    <div className="video-section">
        <h1>Official Videos</h1>
        <iframe className="video" src="https://www.youtube.com/embed/xpcVZVtZPKI" title="Youtube video"/>
        <iframe className="video" src="https://www.youtube.com/embed/Y9HsRzWT76w" title="Youtube video"/>      
    </div>
    )
}

export default MidVideo;

//how i imbeded the video ;https://www.youtube.com/watch?v=xNRJwmlRBNU

// eslint-disable-next-line no-lone-blocks
{/* <video className="video" source="https://www.youtube.com/watch?v=Hgx7uPDWJUM"><p>video loading.....</p></video>    
<video src="https://www.youtube.com/watch?v=xpcVZVtZPKI" className="video"><p>video loading .....</p></video>  */}

