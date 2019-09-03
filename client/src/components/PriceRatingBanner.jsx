import React from 'react';
import { SvgRatingStar } from './SvgComponents.jsx';

function PriceRatingBanner(props) {
  return (
    <div>
      <div className="PRBPriceBanner">
        <span className="spanRender">
          <span className="spanRender PRBPriceHead">${props.price}</span>
        </span>
        <span className="spanRender PRBPerNightHead"> per night</span>
      </div>
      <div>
        <span className="spanRender">
          <span className="spanRender PRBRatingStar">
            <SvgRatingStar />
          </span>
          <span className="spanRender PRBRatingStar">
            <SvgRatingStar />
          </span>
          <span className="spanRender PRBRatingStar">
            <SvgRatingStar />
          </span>
          <span className="spanRender PRBRatingStar">
            <SvgRatingStar />
          </span>
          <span className="spanRender PRBRatingStar">
            <SvgRatingStar />
          </span>
        </span>
        <span className="spanRender PRBRatingCount">227</span>
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