import React from 'react';


function DateRangePicker(props) {
    return (
        <div>
            {/* open to add label for date picker */}
            <div className='DRPcheckinCheckout'>
                <div className='DRPcheckinCheckoutBorder'>
                    <div className='DRPcheckinCheckoutTR'>
                        <div className='DRPcheckinTableCell'>
                            <div className='DRPcheckinCheckoutPad'>
                                <input type='text' label='Check-in' placeholder='Check-in'></input>
                            </div>
                        </div>
                        <div className='DRPcheckoutTableCell'>
                            <div className='DRPcheckinCheckoutPad'>
                                <input type='text' label='Check-out' placeholder='Check-out'></input>
                            </div>                       
                        </div>
                    </div>

                </div>
            </div>
            {/* <Calendar calendar={props.calendar} selectDates={props.selectDates} /> */}
        </div>
    )  
}

export {
    DateRangePicker
}