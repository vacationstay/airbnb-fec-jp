import React from 'react';

const SvgArrowLeft = props => (
  <svg
    viewBox="0 0 1000 1000"
    style={{
      height: 33,
      width: 39,
    }}
    {...props}>
    <path d="M336.2 274.5l-210.1 210h805.4c13 0 23 10 23 23s-10 23-23 23H126.1l210.1 210.1c11 11 11 21 0 32-5 5-10 7-16 7s-11-2-16-7l-249.1-249c-11-11-11-21 0-32l249.1-249.1c21-21.1 53 10.9 32 32z" />
  </svg>
);
const SvgArrowRight = props => (
  <svg
    viewBox="0 0 1000 1000"
    style={{
      height: 33,
      width: 39,
    }}
    {...props}>
    <path d="M694.4 242.4l249.1 249.1c11 11 11 21 0 32L694.4 772.7c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210.1-210.1H67.1c-13 0-23-10-23-23s10-23 23-23h805.4L662.4 274.5c-21-21.1 11-53.1 32-32.1z" />
  </svg>
);
const SvgArrowTopCal = props => (
  <svg className={props.currentShow === 'Check-in' ? "arrow-top-cal_svg___dpszbt" : 'arrow-top-cal_svg___dpszbt arrow-top-cal_svg___dpszbt-right'}>
    <path className="arrow-top-cal_svg___whdw9f" d="M0 10h20L10 0z" />
    <path className="arrow-top-cal_svg___c3dsty" d="M0 10L10 0l10 10" />
  </svg>
);
const SvgArrowCalendar = props => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    style={{
      height: 24,
      width: 24
    }}
    display="block"
    fill="currentcolor"
    {...props}
  >
    <path
      d="M0 12.5a.5.5 0 0 0 .5.5h21.79l-6.15 6.15a.5.5 0 1 0 .71.71l7-7v-.01a.5.5 0 0 0 .14-.35.5.5 0 0 0-.14-.35v-.01l-7-7a.5.5 0 0 0-.71.71L22.29 12H.5a.5.5 0 0 0-.5.5z"
      fillRule="evenodd"
    />
  </svg>
);
const SvgGuestIncrement = props => (
  <svg
    className='SVGGuestColor'
    viewBox="0 0 24 24"
    aria-label="subtract"
    style={{
      height: "1em",
      width: "1em"
    }}
    display="block"
    fill="currentcolor"
    {...props}
  >
    <rect height={2} rx={1} width={12} x={6} y={11} />
  </svg>
);
const SvgGuestIncrement2 = props => (
  <svg
    className='SVGGuestColor'
    viewBox="0 0 24 24"
    aria-label="add"
    style={{
      height: "1em",
      width: "1em"
    }}
    display="block"
    fill="currentcolor"
    {...props}
  >
    <rect height={2} rx={1} width={12} x={6} y={11} />
    <rect height={12} rx={1} width={2} x={11} y={6} />
  </svg>
);
const SvgRatingStar = props => (
  <svg
    viewBox="0 0 1000 1000"
    aria-hidden="true"
    style={{
      height: "1em",
      width: "1em"
    }}
    display="block"
    fill="currentcolor"
    {...props}
  >
    <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
  </svg>
);


export {
  SvgArrowLeft,
  SvgArrowRight,
  SvgArrowTopCal,
  SvgArrowCalendar,
  SvgGuestIncrement,
  SvgGuestIncrement2,
  SvgRatingStar,
}