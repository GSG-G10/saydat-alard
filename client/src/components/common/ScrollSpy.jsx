/* eslint-disable react/no-array-index-key */
import React, { useRef } from 'react';
import { Scrollspy } from '@makotot/ghostui';
import './css/scrollSpy.css';

const arr = ['nizar', 'ahmed', 'master'];

const ScrollSpy = () => {
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
                key={i}
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
                key={i}
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

export default ScrollSpy;
