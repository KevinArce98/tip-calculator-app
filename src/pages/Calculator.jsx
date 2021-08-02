// Components
import Form from '../components/Form';

// Images
import logo from '../assets/img/logo.svg';

const Calculator = () => {
    return (
        <div className="bg-index h-full text-white flex justify-center items-center">
            <div className="content w-full md:w-7/12">
                <div className="logo-container mb-16 text-center">
                    <img src={logo} alt="logo" className="inline-block"/>
                </div>

                <div className="card bg-white rounded-3xl p-8 shadow-2xl grid grid-cols-2 gap-8">
                   <Form/>

                    <div className="totals bg-black rounded-xl">
                        totals
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator
