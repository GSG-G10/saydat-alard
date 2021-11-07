import React, { useRef } from 'react';
import { Scrollspy } from '@makotot/ghostui';
import PropTypes from 'prop-types';
import './scrollSpy.css';

const { number, shape, arrayOf } = PropTypes;

const ScrollSpy = ({ eleOfList }) => {
  const arr = eleOfList;
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  return (
    <Scrollspy sectionRefs={sectionRefs}>
      {({ currentElementIndexInViewport }) => (
        <div className="scroll-nav">
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
        </div>
      )}
    </Scrollspy>
  );
};

ScrollSpy.propTypes = {
  eleOfList: arrayOf(
    shape({
      id: number.isRequired,
    }),
  ).isRequired,
};
export default ScrollSpy;
