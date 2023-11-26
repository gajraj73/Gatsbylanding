import * as React from "react";
import { useMemo } from "react";
import * as styles from "./card-container.module.css";

const CardContainer = ({
  cryptoImageUrl,
  cryptoSymbolImageUrl,
  cryptoPairImageUrl,
  dimensionImageUrl,
  price,
  assetImageUrl,
  labelImageUrl,
  financialValue,
  percentageText,
  propHeight,
  propTextDecoration,
}) => {
  const vectorIconStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const aStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.groupParent}>
          <img className={styles.frameChild} alt="" src={cryptoImageUrl} />
          <div className={styles.bitcoinParent}>
            <div className={styles.bitcoin}>{cryptoSymbolImageUrl}</div>
            <div className={styles.btcusdt}>{cryptoPairImageUrl}</div>
          </div>
        </div>
        <img
          className={styles.vectorIcon}
          alt=""
          src={dimensionImageUrl}
          style={vectorIconStyle}
        />
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.priceParent}>
          <div className={styles.price}>Price</div>
          <a
            className={styles.a}
            href={assetImageUrl}
            target={labelImageUrl}
            style={aStyle}
          >
            {price}
          </a>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.volParent}>
            <div className={styles.price}>VOL</div>
            <div className={styles.b}>{financialValue}</div>
          </div>
          <div className={styles.volParent}>
            <div className={styles.price}>CHG</div>
            <div className={styles.div}>{percentageText}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
