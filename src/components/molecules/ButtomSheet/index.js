import React from 'react'
// import './BottomSheet.css'
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';
import style from './BottomSheet.module.css'
import AlertConfirm from './bottom_sheets/AlertConfirm';

const styles = {
  cont: {
    // backgroundColor: 'red',
    borderRadius: 10,
    maxWidth: '480px',
    // position: 'absolute',
  },
  bdy: {
    // backgroundColor: 'red',
    borderRadius: 10,
    maxWidth: '480px',
  }
}



const ButtomSheet = (props) => {
  return (
    <SwipeableBottomSheet
      fullScreen={false}
      // overflowHeight={10}
      open={props.sheetVisible}
      style={styles.cont}
      bodyStyle={styles.bdy}

      onChange={() => {
        props.setSheetVisible(!props.sheetVisible);
      }}
    >
      <div
        className={style.BottomCheetContainer}
      // style={styles.container}
      >
        <AlertConfirm />
      </div>
    </SwipeableBottomSheet>
  )
}


export default ButtomSheet
