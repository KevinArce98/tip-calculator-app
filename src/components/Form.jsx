
// Hooks
import { useContext, useState } from 'react';

// Contexts
import { DataContext } from '../context/DataContext';

// Components
import TextField from '../components/TextField';

// Assets
import dollar from '../assets/img/icon-dollar.svg';
import person from '../assets//img/icon-person.svg';
import Button from '../components/Button';

// Utils
import { percentages } from '../utils/general';

const Form = () => {

    const { data, changeData } = useContext(DataContext);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { value, name } = e.target;
        const regexp = /^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$/;

        if (regexp.test(value) || value === '') {
            changeData({ ...data, [name]: value })
        }
    }

    const handleChangePeople = (e) => {
        const { value, name } = e.target;
        setErrors({ ...errors, [name]: undefined });

        const regexp = /^[0-9]*$/;

        if (parseInt(value) === 0) {
            setErrors({ [name]: "Can't be zero" })
        }

        if (regexp.test(value) || value === '') {
            changeData({ ...data, [name]: value })
        }
    }

    const handleClickPercentage = (e, percentage) => {
        e.preventDefault();
        changeData({ ...data, tipPercentage: { isCustom: false, value: percentage } })
    }

    const handleChangeCustomPercentage = (e) => {
        const { value } = e.target;

        const regexp = /^[0-9]*$/;

        if (regexp.test(value) || value === '') {
            changeData({ ...data, tipPercentage: { isCustom: true, value } })
        }
    }

    const handleSubmit = (e) => e.preventDefault();

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group mb-3 md:mb-8">
                <p className="mb-3">Bill</p>
                <TextField icon={dollar} placeholder="0" value={data.bill} onChange={handleChange} name="bill" />
            </div>
            <div className="form-group mb-3 md:mb-8">
                <p className="mb-3">Select tip %</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {
                        percentages.map(percentage => (
                            <Button
                                key={`${percentage}-value`}
                                className={`btn-dark ${data.tipPercentage.value === percentage ? 'active' : ''}`}
                                onClick={(e) => handleClickPercentage(e, percentage)}
                            >
                                {percentage}%
                            </Button>
                        ))
                    }
                    <TextField
                        placeholder="Custom"
                        onChange={handleChangeCustomPercentage}
                        value={data.tipPercentage.isCustom ? data.tipPercentage.value : ''}
                    />
                </div>
            </div>
            <div className="form-group mb-3 md:mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 mb-3 gap-1">
                    <p>Number of people</p>
                    {
                        errors['people'] &&
                        <p className="text-red-500 md:text-right">{errors['people']}</p>
                    }
                </div>
                <TextField
                    icon={person}
                    placeholder="0"
                    value={data.people}
                    onChange={handleChangePeople}
                    name="people"
                    hasError={errors['people']}
                />
            </div>
        </form>
    )
}

export default Form
