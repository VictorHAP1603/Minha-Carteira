import React, { useEffect, useMemo, useState } from "react";

import ContentHeader from "../../components/ContentHeader/index";
import SelectInput from "../../components/SelectInput";
import WalletBox from "../../components/WalletBox";
import MessageBox from "../../components/MessageBox";

import { Months } from "../../utils/months";
import { expenses } from "../../utils/expenses";
import { gains } from "../../utils/gains";

import { Container, Content } from "./style";

interface IData {
  description: string;
  amount: string;
  type: string;
  frequency: string;
  date: string;
}

const Dashboard: React.FC = () => {
  const [data, setData] = useState<IData[]>([]);

  const [monthSelected, setMonthSelected] = useState<string>(
    String(new Date().getMonth() + 1)
  );
  const [yearSelected, setYearSelected] = useState<string>(
    String(new Date().getFullYear())
  );

  const listDatas = useMemo(() => {
    return [...gains, ...expenses];
  }, []);

  const titleProps = {
    title: "Dashboard",
    lineColor: "#e44c4e",
  };

  const months = useMemo(() => {
    return Months.map((month, index) => ({ value: index + 1, label: month }));
  }, []);

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    [...gains, ...expenses].forEach(({ date }) => {
      const year = new Date(date).getFullYear();
      if (!uniqueYears.includes(year)) uniqueYears.push(year);
    });

    return uniqueYears
      .sort((a, b) => b - a)
      .map((year) => ({ value: year, label: year }));
  }, []);

  useEffect(() => {
    const filteredCards = listDatas.filter((item) => {
      const date = new Date(item.date);
      const month = String(date.getMonth() + 1);
      const year = String(date.getFullYear());

      return month === monthSelected && year === yearSelected;
    });

    setData(filteredCards);
  }, [monthSelected, yearSelected, listDatas]);

  const gainsFiltered = data
    .filter(({ type }) => type === "entrada")
    .reduce((acm, number) => {
      return (acm += Number(number.amount));
    }, 0);

  const expensesFiltered = data
    .filter(({ type }) => type === "saída")
    .reduce((acm, number) => {
      return (acm += Number(number.amount));
    }, 0);

  const totalFiltered = gainsFiltered - expensesFiltered;

  return (
    <Container>
      <ContentHeader title={titleProps.title} color={titleProps.lineColor}>
        <SelectInput
          options={months}
          onChange={(e) => setMonthSelected(e.target.value)}
          defaultValue={monthSelected}
        />
        <SelectInput
          options={years}
          onChange={(e) => setYearSelected(e.target.value)}
          defaultValue={yearSelected}
        />
      </ContentHeader>

      <Content>
        <WalletBox
          title="saldo"
          amount={totalFiltered}
          footerLabel="atualizado com base nas entradas e saídas"
          icon="dolar"
          color="#4e41f0"
        />

        <WalletBox
          title="entradas"
          amount={gainsFiltered}
          footerLabel="atualizado com base nas entradas e saídas"
          icon="arrow-up"
          color="#f7931b"
        />

        <WalletBox
          title="saídas"
          amount={expensesFiltered}
          footerLabel="atualizado com base nas entradas e saídas"
          icon="arrow-down"
          color="#e44c4e"
        />

        <MessageBox />
      </Content>
    </Container>
  );
};

export default Dashboard;
