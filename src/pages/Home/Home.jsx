import React from 'react';
import './Home.scss'
import Top from '../../images/Mask Group.png'
import Bottom1 from '../../images/Mask Group (1).png'
import Bottom2 from '../../images/4.png'
import Right from '../../images/Mask Group (2).png'
const Home = () => {
    return (
        <section className='main'>
            <div className='main__banner'>
            <div className="main__container container">
                <div className='main__banner'>
                <div className='main__title'>
                    <h2>NEW TREND</h2>
                    <span>COLLUSION</span>
                    <p>An exclusive selection of this season's trends.</p>
                    <div className='main__btns'>
                        <button>DISCOVER</button>
                        <button>SHOP NOW</button>
                    </div>
                </div>
               
                </div>
            </div>
            </div>
            <section className='main__photos'>
                <div className='main__photos__container container'>
                     {/* <div> */}
                        <div className='main__photos__left'>
                            <img src={Top} className='photos__top' alt="" />
                            <div className='main__photos__bottom'>
                                <img src={Bottom1} alt="" />
                                <img src={Bottom2} alt="" />
                            </div>
                        </div>
                        <div className='main__photos__right'>
                            <img src={Right} alt="" />
                        </div>
                    </div>
                {/* </div> */}
                </section>
        </section>
    );
};

export default Home;