import logo from '../assets/logo.png';
import MarqueeSection from './MarqueeSection';
import Navbar from './Navbar';
import RealTimeDate from './RealTimeDate';

const TopSection = () => {
    return (
        <div className='flex flex-col items-center mt-[40px]'>
            <img src={logo} alt="logo" />
            <p>Journalism Without Fear or Favor</p>
            <RealTimeDate></RealTimeDate>
            <MarqueeSection></MarqueeSection>
            <Navbar></Navbar>
        </div>
    );
};

export default TopSection;