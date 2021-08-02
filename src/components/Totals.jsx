// Hooks
import { useContext } from "react";

// Context
import { DataContext } from "../context/DataContext";

// Components
import TotalAmount from "./TotalAmount";
import Button from './Button';


const Totals = () => {

    const { data, changeData } = useContext(DataContext);

    const disabledButton = data.bill === '' && data.tipPercentage.value === '' && data.people === '';

    const handleReset = (e) => {
        changeData({ bill: '', tipPercentage: { isCustom: false, value: '' }, people: '' });
    }

    const getTipAmountPerPerson = () => {
        if (data.bill === '' || data.tipPercentage.value === '' || data.people === '') return '0.00';
        const result = (data.bill * (parseFloat(data.tipPercentage.value) / 100.00)) / data.people;
        return result.toFixed(2);
    }

    const getTotalPerPerson = () => {
        if (data.bill === '' || data.tipPercentage.value === '' || data.people === '') return '0.00';
        const result = (data.bill / data.people) + parseFloat(getTipAmountPerPerson());
        return result.toFixed(2);
    }

    return (
        <div className="totals rounded-xl px-5 py-5 md:p-10">
            <TotalAmount amount={getTipAmountPerPerson()} title="Tip Amount" subtitle="/ person" />
            <TotalAmount amount={getTotalPerPerson()} title="Total" subtitle="/ person" />

            <Button className="btn-light w-full md:mt-14" onClick={handleReset} disabled={disabledButton}>RESET</Button>
        </div>
    )
}

export default Totals
