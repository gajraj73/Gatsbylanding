import * as React from "react";
import { useMemo } from "react";
import * as styles from "./account-registration-section.module.css";

const AccountRegistrationSection = ({
  imageDimensions,
  imageDimensionsText,
  ctaText,
  ctaButtonText,
  propWidth,
  propWidth1,
  propHeight,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const groupIconStyle = useMemo(() => {
    return {
      width: propWidth1,
      height: propHeight,
    };
  }, [propWidth1, propHeight]);

  return (
    <div className={styles.groupParent} style={frameDivStyle}>
      <img className={styles.frameChild} alt="" src={imageDimensions} />
      <div className={styles.groupContainer}>
        <img
          className={styles.frameItem}
          alt=""
          src={imageDimensionsText}
          style={groupIconStyle}
        />
        <div className={styles.frameParent}>
          <div className={styles.createAnAccountParent}>
            <div className={styles.createAnAccount}>{ctaText}</div>
            <div className={styles.registerComplete}>{ctaButtonText}</div>
          </div>
          <div className={styles.tradeNowWrapper}>
            <b className={styles.tradeNow}>Trade Now</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountRegistrationSection;
