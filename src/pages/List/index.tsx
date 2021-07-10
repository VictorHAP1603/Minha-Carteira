import React, { useState, useMemo, useEffect } from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";

import { expenses } from "../../utils/expenses";
import { gains } from "../../utils/gains";

import { dateFormat } from "../../utils/dateFormat";
import { amountFormat } from "../../utils/amountFormat";

import { Container, Content, Filters, WithoutTransaction } from "./style";
import { Months } from "../../utils/months";

interface IRouteProps {
  match: {
    params: {
      type: string;
    };
  };
}

interface IData {
  description: string;
  amount: string;
  type: string;
  frequency: string;
  date: string;
}

const List: React.FC<IRouteProps> = ({ match }) => {
  const [data, setData] = useState<IData[]>([]);
  const [filterFrequencySelected, setFilterFrequencySelected] = useState<
    string[]
  >(["recorrente", "eventual"]);

  const [monthSelected, setMonthSelected] = useState<string>(
    String(new Date().getMonth() + 1)
  );

  const [yearSelected, setYearSelected] = useState<string>(
    String(new Date().getFullYear())
  );

  const { type } = match.params;

  const listDatas = useMemo(() => {
    return type === "entradas" ? gains : expenses;
  }, [type]);

  const titleProps = useMemo(() => {
    return type === "entradas"
      ? {
          title: "Entradas",
          lineColor: "#f7931b",
        }
      : {
          title: "Saídas",
          lineColor: "#e44c4e",
        };
  }, [type]);

  const months = useMemo(() => {
    return Months.map((month, index) => ({ value: index + 1, label: month }));
  }, []);

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    listDatas.forEach(({ date }) => {
      const year = new Date(date).getFullYear();
      if (!uniqueYears.includes(year)) uniqueYears.push(year);
    });
    uniqueYears.push(new Date().getFullYear());

    return uniqueYears
      .sort((a, b) => b - a)
      .map((year) => ({ value: year, label: year }));
  }, [listDatas]);

  useEffect(() => {
    const filteredCards = listDatas.filter((item) => {
      const date = new Date(item.date);
      const month = String(date.getMonth() + 1);
      const year = String(date.getFullYear());

      return (
        month === monthSelected &&
        year === yearSelected &&
        filterFrequencySelected.includes(item.frequency)
      );
    });
    // console.log(filteredCards);

    setData(filteredCards);
  }, [monthSelected, yearSelected, listDatas, filterFrequencySelected]);

  function filterTable(typeFilter: string) {
    if (filterFrequencySelected.includes(typeFilter)) {
      setFilterFrequencySelected(
        filterFrequencySelected.filter((filter) => filter !== typeFilter)
      );
    } else {
      setFilterFrequencySelected([...filterFrequencySelected, typeFilter]);
    }
  }

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

      <Filters>
        <button
          type="button"
          className={`${
            filterFrequencySelected.includes("recorrente") ? "tag-selected" : ""
          } tag-filter tag-filter-recurrent`}
          onClick={() => filterTable("recorrente")}
        >
          Recorrentes
        </button>

        <button
          type="button"
          className={`${
            filterFrequencySelected.includes("eventual") ? "tag-selected" : ""
          } tag-filter tag-filter-eventual`}
          onClick={() => filterTable("eventual")}
        >
          Eventuais
        </button>
      </Filters>

      <Content>
        {data.length > 0 ? (
          data.map(({ description, date, amount, frequency }, index) => (
            <HistoryFinanceCard
              key={index}
              tagColor="#e44c4e"
              frequency={frequency}
              title={description}
              subTitle={dateFormat(date)}
              amount={amountFormat(amount)}
            />
          ))
        ) : (
          <WithoutTransaction>Não possui nenhuma transação</WithoutTransaction>
        )}
      </Content>
    </Container>
  );
};

export default List;
