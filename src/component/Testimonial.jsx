import React from 'react'
import { styled } from '@mui/material/styles';
import StarRateIcon from '@mui/icons-material/StarRate';
import "../style/Testimonial.css"
function Testimonial() {


const StyledIcon = styled(StarRateIcon)({
  fontSize: '40px',
  color: 'blue',
});


   
  return (
    <div className='testimonial'>
        <div className='test-text'>
            <p>Trusted By </p>
            <p><span>140M</span> people</p>
        </div>
        <div className='test-text'>
            <p>Founded in </p>
            <p><span>2017</span></p>
        </div>
        <div className='test-text'>
            <p>Independently </p>
            <p><span>Audited</span></p>
        </div>
        <div className='test-text'>
            <p>ISO</p>
            <p><span>Certified</span></p>
        </div>
        <div className='test-text'>
            <p>Top Reviews </p>
            <p><span>
                <StyledIcon />
                <StyledIcon />
                <StyledIcon />
                <StyledIcon />
                </span> </p>
        </div>
    </div>
  )
}

export default Testimonial