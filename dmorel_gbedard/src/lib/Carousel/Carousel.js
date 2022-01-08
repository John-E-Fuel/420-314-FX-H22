import React from 'react';
import PropTypes from 'prop-types';
import {Carousel} from 'antd';
import classes from './Carousel.module.css';

function onChange(a, b, c) {
  console.log(a, b, c);
}

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const carousel = () => (
  <Carousel afterChange={onChange}>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);

carousel.propTypes = {
  /**
   * Here you can use propTypes to define properties and modify them
   */
  picker: PropTypes.string.isRequired,
};

export default carousel;
