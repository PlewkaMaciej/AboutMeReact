import '../styles/DescribeMe.css';
import myphoto from "../photos/myPhoto.png"
function DescribeMe() {
    return (
        <div className='describe-me-container'>
            <div className='info-about-me-container'>
                <p className='my-name-paragraph'> Maciej Plewka</p>

                <h1 className='about-me-heading'>Front-end developer</h1>
                <p className='description-about-me-paragraph'>In 2021, I started learning JavaScript programming. After
                    the first weeks, I knew that this is what I want to do in life.
                    Therefore, in 2021 I started the Front-end Developer
                    course organized by InfoShare Academy, in which I strongly
                    developed my web application development skills. At the
                    moment I am looking for my first job in the IT industry,
                    where I could broaden my knowledge and work with people
                    who share the same interests. I am a very open and
                    creative person who will certainly bring a lot of good to the
                    team.</p>
            </div>
            <img className="myphoto" src={myphoto} alt="myPhoto" />
        </div>
    );
}

export default DescribeMe;
