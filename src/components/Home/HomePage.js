import videoHomePage from '../../assets/video-1920.mp4'
const HomePage = (props) => {
    return (<div className="homepage-container">
        <video autoPlay muted loop>
            <source src={videoHomePage} type="video/mp4" />
        </video>
    </div>)
}
export default HomePage;