import React, { useRef } from 'react';
import { Scrollspy } from '@makotot/ghostui';
import PropTypes from 'prop-types';
import './scrollSpy.css';

const ScrollSpy = ({ eleOfList = [] }) => {
  const arr = eleOfList;
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  return (
    <Scrollspy sectionRefs={sectionRefs}>
      {({ currentElementIndexInViewport }) => (
        <div>
          <ul
            data-cy="nav-wrapper"
            className="nav-wrapper"
          >
            {arr.map((ele, i) => (
              <li
                key={ele}
                className={
                    currentElementIndexInViewport === i ? 'active' : ''
                  }
              >
                <a
                  href={`#section-${i}`}
                  style={{
                    color:
                        currentElementIndexInViewport === i ? '#f00' : '#222',
                  }}
                >
                  {ele}
                </a>
              </li>
            ))}
          </ul>
          <div className="before-sections" />
          <div
            data-cy="section-wrapper"
            className="section-wrapper"
          >
            {arr.map((ele, i) => (
              <section
                id={`section-${i}`}
                key={ele}
                ref={sectionRefs[i]}
                className={
                    currentElementIndexInViewport === i ? 'active' : ''
                }
              >
                {arr[i]}
              </section>
            ))}
          </div>
          <div className="after-sections" />
        </div>
      )}
    </Scrollspy>
  );
};

Scrollspy.propTypes = {
  eleOfList: PropTypes.isRequired,

};
export default ScrollSpy;
