// Styles
import './assets/scss//tailwind.output.scss';
import './assets/scss/global.scss';

// Context
import { DataContextProvider } from './context/DataContext';

// Pages
import Calculator from './pages/Calculator';

const TipCalculatorApp = () => {
	return (
		<DataContextProvider>
			<Calculator />
		</DataContextProvider>
	)
}

export default TipCalculatorApp
