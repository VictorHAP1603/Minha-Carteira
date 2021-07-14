import React, { useEffect, useMemo, useState } from "react";

import ContentHeader from "../../components/ContentHeader/index";
import SelectInput from "../../components/SelectInput";
import WalletBox from "../../components/WalletBox";
import MessageBox from "../../components/MessageBox";
import PieChart from "../../components/PieChart";
import HistoryBox from "../../components/HistoryBox";
import BarChartBox from "../../components/BarChartBox";

import HappyImg from "../../assets/happy.svg";
import SadImg from "../../assets/sad.svg";
import GrinningImg from "../../assets/grinning.svg";

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

  const gainsFiltered = useMemo(() => {
    return data
      .filter(({ type }) => type === "entrada")
      .reduce((acm, number) => {
        return (acm += Number(number.amount));
      }, 0);
  }, [data]);

  const expensesFiltered = useMemo(() => {
    return data
      .filter(({ type }) => type === "saída")
      .reduce((acm, number) => {
        return (acm += Number(number.amount));
      }, 0);
  }, [data]);

  const totalFiltered = gainsFiltered - expensesFiltered;

  const messageBox = useMemo(() => {
    if (totalFiltered > 0) {
      return {
        title: "Muito Bem!",
        description: "Sua carteira está positiva!",
        footerText: "Continue assim!. Considere investir o seu saldo",
        icon: HappyImg,
      };
    } else if (totalFiltered === 0 && expensesFiltered === 0) {
      return {
        title: "Ops!",
        description: "Neste mês, não há registro de entradas ou saídas.",
        footerText: "Parece que você não fez nenhuma compra nesse mês",
        icon: GrinningImg,
      };
    } else if (totalFiltered === 0) {
      return {
        title: "Ufa, Foi Quase!",
        description: "Neste mês, você gastou o que ganhou!.",
        footerText: "Tome cuidado, no próximo mês tente poupar o seu dinheiro",
        icon: GrinningImg,
      };
    } else {
      return {
        title: "Que Triste!",
        description: "Neste mês, você gastou mais do que deveria.",
        footerText:
          "Verifique seus gastos e tente cortar algumas coisas desnecessárias !",
        icon: SadImg,
      };
    }
  }, [totalFiltered, expensesFiltered]);

  const relationsExpensesVsGains = useMemo(() => {
    const total = gainsFiltered + expensesFiltered;

    const gainsPercent = (gainsFiltered * 100) / total;
    const expensesPercent = (expensesFiltered * 100) / total;

    return [
      {
        name: "Entradas",
        value: total,
        percent: Number(gainsPercent.toFixed(1)) || 0,
        color: "#f7931b",
      },
      {
        name: "Saídas",
        value: total,
        percent: Number(expensesPercent.toFixed(1)) || 0,
        color: "#e44",
      },
    ];
  }, [expensesFiltered, gainsFiltered]);

  const historyData = useMemo(() => {
    return Months.map((value, month) => {
      let amountEntry = 0;
      let amountOutput = 0;

      gains.forEach((gain) => {
        const date = new Date(gain.date);
        const gainMonth = date.getMonth();
        const gainYear = date.getFullYear();

        if (gainMonth === month && gainYear === +yearSelected) {
          try {
            amountEntry += +gain.amount;
          } catch {
            throw new Error("Amount invalid");
          }
        }
      });

      expenses.forEach((expense) => {
        const date = new Date(expense.date);
        const expenseMonth = date.getMonth();
        const expenseYear = date.getFullYear();

        if (expenseMonth === month && expenseYear === +yearSelected) {
          try {
            amountOutput += +expense.amount;
          } catch {
            throw new Error("Amount invalid");
          }
        }
      });

      return {
        monthNumber: month,
        month: value.slice(0, 3),
        amountEntry: +amountEntry.toFixed(2),
        amountOutput: +amountOutput.toFixed(2),
      };
    }).filter((item) => {
      const currentMonth = new Date().getMonth();
      const currentYear = new Date().getFullYear();

      return (
        (+yearSelected === currentYear && item.monthNumber <= currentMonth) ||
        +yearSelected < currentYear
      );
    });
  }, [yearSelected]);

  const relationsExpensesRecurrentVsEventual = useMemo(() => {
    let amountRecurrent = 0;
    let amountEventual = 0;

    let total = 0;

    expenses
      .filter((expense) => {
        const date = new Date(expense.date);
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        return year === +yearSelected && month === +monthSelected;
      })
      .forEach((expense) => {
        total += +expense.amount;
        if (expense.frequency === "eventual") {
          amountEventual += +expense.amount;
        } else {
          amountRecurrent += +expense.amount;
        }
      });

    return [
      {
        name: "Recorrente",
        amount: amountRecurrent,
        percent: +((amountRecurrent * 100) / total).toFixed(1) || 0,
        color: "#f7931b",
      },
      {
        name: "Eventual",
        amount: amountEventual,
        percent: +((amountEventual * 100) / total).toFixed(1) || 0,
        color: "#e44",
      },
    ];
  }, [monthSelected, yearSelected]);

  const relationsGainsRecurrentVsEventual = useMemo(() => {
    let amountRecurrent = 0;
    let amountEventual = 0;

    let total = 0;

    gains
      .filter((gain) => {
        const date = new Date(gain.date);
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        return year === +yearSelected && month === +monthSelected;
      })
      .forEach((gain) => {
        total += +gain.amount;

        if (gain.frequency === "eventual") {
          amountEventual += +gain.amount;
        } else {
          amountRecurrent += +gain.amount;
        }
      });

    return [
      {
        name: "Recorrente",
        amount: amountRecurrent,
        percent: +((amountRecurrent * 100) / total).toFixed(1) || 0,
        color: "#f7931b",
      },
      {
        name: "Eventual",
        amount: amountEventual,
        percent: +((amountEventual * 100) / total).toFixed(1) || 0,
        color: "#e44",
      },
    ];
  }, [monthSelected, yearSelected]);

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

        <MessageBox
          title={messageBox.title}
          description={messageBox.description}
          footerText={messageBox.footerText}
          icon={messageBox.icon}
        />

        <PieChart data={relationsExpensesVsGains} />

        <HistoryBox
          data={historyData}
          lineColorAmountEntry="#f79b13"
          lineColorAmountOutput="#e44"
        />

        <BarChartBox
          data={relationsExpensesRecurrentVsEventual}
          title="Saídas"
        />

        <BarChartBox
          data={relationsGainsRecurrentVsEventual}
          title="Entradas"
        />
      </Content>
    </Container>
  );
};

export default Dashboard;
