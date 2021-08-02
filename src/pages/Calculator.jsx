// Components
import Form from '../components/Form';
import Totals from '../components/Totals';

// Images
import logo from '../assets/img/logo.svg';

const Calculator = () => {
    return (
        <div className="bg-index min-h-screen text-white flex justify-center items-center pt-12 md:p-0">
            <div className="content w-full md:w-7/12">
                <div className="logo-container mb-9 md:mb-16 text-center">
                    <img src={logo} alt="logo" className="inline-block"/>
                </div>

                <div className="card bg-white rounded-3xl p-5 md:py-8 shadow-2xl grid md:grid-cols-2 gap-8">
                   <Form/>

                   <Totals/>
                </div>
            </div>
        </div>
    )
}

export default Calculator
