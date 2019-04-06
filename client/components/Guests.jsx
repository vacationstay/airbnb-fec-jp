  import React from 'react';

function Guests(props) {
  let guestLabel = '1 guest';

  const formatGuestLabel = function () {
    var current = props.guests;
    if ((current[0] + current[1])) {
      guestLabel += `${current[0] + current[1]} guests`;
    } else if (current[2]){
      guestLabel += `, ${current[2]} infants`;
    }
  }
  return (
    <div>
      <label>
        <span>Guests</span>
      </label>
      <div className='guestFieldOuter'>
        <div className='guestFieldInner'>
          <button className='guestButton' onClick={props.onGuestMenuExpandClick}>
            <div className='guestButtonInner'>
              <div className='guestButtonText'>
                <div className='guestButtonTable'>
                  <div className='guestButtonTableCell'>
                    <div>
                      <span>{guestLabel}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}


export {
  Guests,
}
