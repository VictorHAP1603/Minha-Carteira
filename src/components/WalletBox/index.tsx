import React from "react";

import CountUp from "react-countup";

import dollarImg from "../../assets/dolar.svg";
import arrowUpImg from "../../assets/arrow-up.svg";
import arrowDownImg from "../../assets/arrow-down.svg";

import { Container } from "./style";

interface IWalletBoxProps {
  title: string;
  amount: number;
  footerLabel: string;
  icon: "dolar" | "arrow-up" | "arrow-down";
  color: string;
}

const WalletBox: React.FC<IWalletBoxProps> = ({
  amount,
  color,
  footerLabel,
  icon,
  title,
}) => {
  const iconSelected = () => {
    switch (icon) {
      case "dolar":
        return dollarImg;
      case "arrow-up":
        return arrowUpImg;
      case "arrow-down":
        return arrowDownImg;
      default:
        return dollarImg;
    }
  };

  return (
    <Container color={color}>
      <span>{title}</span>
      <h1>
        <CountUp
          end={amount}
          prefix="R$ "
          separator="."
          decimal=","
          decimals={2}
          preserveValue={true}
        />
      </h1>
      <small>{footerLabel}</small>
      <img src={iconSelected()} alt={title} />
    </Container>
  );
};

export default WalletBox;
