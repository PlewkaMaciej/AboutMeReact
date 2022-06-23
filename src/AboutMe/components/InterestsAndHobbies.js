import '../styles/InterestsAndHobbies.css';
import kswPhoto from "../photos/kswPhoto.jpg"
import trainingPhoto from "../photos/trainingPhoto.jpg"
function InterestsAndHobbies() {
    return (
        <div className='InterestAndHobbies-container'>
            <div className='paragraph-and-heading-interestAndHobbiesContainer'>
                <h1 className='interest-hobbies-heading'>Interests&Hobbies</h1>

                <p className='interest-hobbies-paragraph'>Apart from my interest in programming, I was interested in martial arts since I was a child. I have been training boxing for 4 years.</p>
            </div>
            <div className='photo-container'>
                <div className='ksw-photo-container'>
                    <img className="ksw-Photo" src={kswPhoto} alt="Ksw" />
                    <p className='ksw-photo-paragraph'>KSW 2022 Toruń</p>
                </div>
                <div className='training-photo-container'>
                    <img className="training-photo" src={trainingPhoto} alt="trainingPhoto" />
                    <p className='training-photo-paragraph'>Photo from training</p>
                </div>

            </div>
            <div className='movie-container'>
                <iframe
                    className='video-of-fav-battle'
                    src="https://www.youtube.com/embed/9MiwQO-qhpc"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    title="video"
                    allowFullScreen
                />
                <p className='fav-video-paragraph'>My favorite boxing fight</p>
            </div>
        </div>
    );
}

export default InterestsAndHobbies;