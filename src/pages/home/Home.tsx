import React from 'react';
import Slider, { Settings } from 'react-slick';

import css from './Home.module.scss';

const settings: Settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true
};

export const Home = () => {
  return (
    <div>
      <Slider {...settings}>
        <div className={css.slide}>
          <div className={css.slideText}>
            <h3 className={css.slideTitle}>Summer Break in Miami River!</h3>
            <p className={css.slideDescription}>Kick back in the sunshine for less with our mid-week promo</p>
          </div>
          <img
            src='https://selina-res.cloudinary.com/image/upload/if_iw_gt_1378,c_scale,w_1378/e_sharpen:80,q_auto:good/f_auto/v1/s-cf-1/xdw7oj4u3s4v/2bPpR2kyvPY51e63U8f4Ea/d0e597e02c07516df5e839be3f06cb56/3._Miami.jpg'
            alt='Miami.jpg'
          />
        </div>
        <div className={css.slide}>
          <div className={css.slideText}>
            <h3 className={css.slideTitle}>Exhale Calm in Bad Gastein</h3>
            <p className={css.slideDescription}>
              Our brand new Austrian destination is the perfect spot to embrace nature’s magic
            </p>
          </div>
          <img
            src='https://selina-res.cloudinary.com/image/upload/if_iw_gt_1378,c_scale,w_1378/e_sharpen:80,q_auto:good/f_auto/v1/s-cf-1/xdw7oj4u3s4v/78b5oTzRT6ZWa93ri44OM4/81b100592c14869a11a79cce47efe73f/10._Bad_Gastein.jpg'
            alt='Bad_Gastein.jpg'
          />
        </div>
      </Slider>
    </div>
  );
};
