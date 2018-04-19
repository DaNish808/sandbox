import React from 'react';

const Smiley = ({ height, width }) => (
  <div className="smiley-icon" style={{ height, width }}>
    <svg viewBox="0 0 500 500">
      <g className="smiley-icon-eyes">
        <ellipse className="smiley-icon-right-eye" stroke="#000" ry="44.000003" rx="29.499999" cy="207.599991" cx="327.999999" strokeWidth="0" fill="#000000" />
        <ellipse className="smiley-icon-left-eye" stroke="#000" ry="32.500002" rx="18.499999" cy="215.099998" cx="149.999999" strokeWidth="0" fill="#000000" />
      </g>
      <ellipse className="smiley-icon-head" stroke="#000" ry="202.999994" rx="230.500007" cy="249.999987" cx="249.999997" strokeWidth="35" fill="none" />
      <path className="smiley-icon-mouth" d="m102.5,292.6c-22,-19 41,72 125,85c84,13 203,-105 154,-66c-49,39 -257,0 -279,-19z" strokeWidth="35" stroke="#000" fill="none" />
    </svg>
  </div>
);

export default Smiley;
