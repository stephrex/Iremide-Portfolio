import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function BarProgress({number}) {
  return <ProgressBar animated now={number} />;
}

export default BarProgress;