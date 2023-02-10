import React from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function ToolTip() {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Coming Soon!!!
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <Button style={{backgroundColor: "#333333"}} className='text-muted border-0 px-0'>
          Testimonial
     </Button>
    </OverlayTrigger>
  );
}

export default ToolTip;