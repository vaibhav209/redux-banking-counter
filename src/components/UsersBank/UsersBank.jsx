import React from "react";
import formatNumber from "format-number";
import styles from "./UsersBank.module.css";
import { useSelector } from "react-redux";
import AmountControls from "../AmountControls/AmountControls";
import ProfileImage from "../ProfileImage/ProfileImage";

const UsersBank = () => {
  const totalAmount = useSelector((state) => state.amountReducer.totalAmount);
  const username = useSelector((state) => state.amountReducer.username);

  return (
    <div className={styles.wholeDisplay}>
      <ProfileImage />
      <p className={styles.username}>Hello, {username}! </p>
      <div className={styles.amount}>
        {formatNumber({ prefix: "$" })(totalAmount)}
        <p className={styles.amountInfo}>Total Amount</p>
      </div>

      <section className={styles.btns}>
        <AmountControls />
      </section>

      <p className={styles.footerText}>Give away all your cash to charity</p>
    </div>
  );
};
export default UsersBank;
