import React from 'react';
import { SvgGuestIncrement } from './SvgComponents.jsx';
import { SvgGuestIncrement2 } from './SvgComponents.jsx';

function Guests(props) {
  const adultCount = props.guests[0];
  const childCount = props.guests[1];
  const infantCount = props.guests[2];
  return (
    <div>
      <label className='labelRender'>
        <span className='spanRender'>Guests</span>
      </label>
      <div className='guestFieldOuter'>
        <div className='guestFieldInner'>
          <button className='guestButton' onClick={(e) => props.onGuestMenuExpandClick(e)}>
            <div className='guestButtonInner'>
              <div className='guestButtonText'>
                <div className='guestButtonTable'>
                  <div className='guestButtonTableCell'>
                    <div>
                      <span className='spanRender guestLabelStr'>{props.guests[3]}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </button>
          <div className=
            {!props.showGuest
              ? 'guestHide'
              : ''}
          >
            <div className='guestExpandContainer'>
              <div className='guestExpandContainerMargin'>
                <div className='guestExpandContainerGuestType'>
                  <div className='guestExpandContainerGuestTypeInner'>
                    <div>
                      <div className='guestExpandContainerGuestTypeInnerTable'>
                        <div className='guestExpandContainerGuestTypeInnerTableCell'>
                          <div className='guestExpandContainerGuestTypeTableLabel'>
                            <div className='guestExpandGuestTypeLabel'>Adults</div>
                          </div>
                        </div>
                        <div className='guestExandContainerGuestTypeInnerTableCellRight'>
                          <div className='guestExpandContainerCellRightTable'>
                              <div className='guestExpandContainerInnerTableCellIncrement'>
                              <button className='incrementBtn' id='decA' type='button' onClick={e => props.onGuestCountChangeClick(e)}>
                                  <span className='spanRender incrementBtnSpan'>
                                  <SvgGuestIncrement/>
                                  </span>
                                </button>
                              </div>
                              <div className='guestExpandRightInnerCount'>
                              <div className='guestExpandRightInnerGuestTypeCount'>{adultCount}</div>
                              </div>
                            <div className='guestExpandContainerInnerTableCellDecrement'>
                              <button className='incrementBtn' id='incA' type='button' onClick={e => props.onGuestCountChangeClick(e)}>
                                  <span className='spanRender incrementBtnSpan'>
                                    <SvgGuestIncrement2 />
                                  </span>
                                </button>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='guestExpandContainerGuestType'>
                  <div className='guestExpandContainerGuestTypeInner'>
                    <div>
                      <div className='guestExpandContainerGuestTypeInnerTable'>
                        <div className='guestExpandContainerGuestTypeInnerTableCell'>
                          <div className='guestExpandContainerGuestTypeTableLabel'>
                            <div className='guestExpandGuestTypeLabel'>Children</div>
                          </div>
                        </div>
                        <div className='guestExandContainerGuestTypeInnerTableCellRight'>
                          <div className='guestExpandContainerCellRightTable'>
                            <div className='guestExpandContainerInnerTableCellIncrement'>
                              <button className='incrementBtn' id='decC' type='button' onClick={e => props.onGuestCountChangeClick(e)}>
                                <span className='spanRender incrementBtnSpan'>
                                  <SvgGuestIncrement />
                                </span>
                              </button>
                            </div>
                            <div className='guestExpandRightInnerCount'>
                              <div className='guestExpandRightInnerGuestTypeCount'>{childCount}</div>
                            </div>
                            <div className='guestExpandContainerInnerTableCellDecrement'>
                              <button className='incrementBtn' id='incC' type='button' onClick={e => props.onGuestCountChangeClick(e)}>
                                <span className='spanRender incrementBtnSpan'>
                                  <SvgGuestIncrement2 />
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='guestExpandContainerGuestType'>
                  <div className='guestExpandContainerGuestTypeInner'>
                    <div>
                      <div className='guestExpandContainerGuestTypeInnerTable'>
                        <div className='guestExpandContainerGuestTypeInnerTableCell'>
                          <div className='guestExpandContainerGuestTypeTableLabel'>
                            <div className='guestExpandGuestTypeLabel'>Infants</div>
                          </div>
                        </div>
                        <div className='guestExandContainerGuestTypeInnerTableCellRight'>
                          <div className='guestExpandContainerCellRightTable'>
                            <div className='guestExpandContainerInnerTableCellIncrement'>
                              <button className='incrementBtn' id='decI' type='button' onClick={e => props.onGuestCountChangeClick(e)}>
                                <span className='spanRender incrementBtnSpan'>
                                  <SvgGuestIncrement />
                                </span>
                              </button>
                            </div>
                            <div className='guestExpandRightInnerCount'>
                              <div className='guestExpandRightInnerGuestTypeCount'>{infantCount}</div>
                            </div>
                            <div className='guestExpandContainerInnerTableCellDecrement'>
                              <button className='incrementBtn' id='incI' type='button' onClick={e => props.onGuestCountChangeClick(e)}>
                                <span className='spanRender incrementBtnSpan'>
                                  <SvgGuestIncrement2 />
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div >
                  <div className='guestExpandContainerGuestNotifyMargin'>
                    <div className='guestExpandContainerGuestNotify'>3 guests maximum. Infants don’t count toward the number of guests.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export {
  Guests,
}
