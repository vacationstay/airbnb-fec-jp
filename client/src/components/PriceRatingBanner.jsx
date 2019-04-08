import React from 'react';
import { SvgRatingStar } from './SvgComponents.jsx';

function PriceRatingBanner(props) {
  return (
    <div>
      <div className="PRBPriceBanner">
        <span>
          <span className="PRBPriceHead">$66</span>
        </span>
        <span className="PRBPerNightHead"> per night</span>
      </div>
      <div>
        <span>
          <span className="PRBRatingStar">
            <SvgRatingStar />
          </span>
          <span className="PRBRatingStar">
            <SvgRatingStar />
          </span>
          <span className="PRBRatingStar">
            <SvgRatingStar />
          </span>
          <span className="PRBRatingStar">
            <SvgRatingStar />
          </span>
          <span className="PRBRatingStar">
            <SvgRatingStar />
          </span>
        </span>
        <span className="PRBRatingCount">227</span>
      </div>
      <div className="PRBDividerContainer">
        <div className="PRBDivider" />
      </div>
    </div>
  );
}
export {
  PriceRatingBanner
}