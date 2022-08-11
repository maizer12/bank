import Home from './component/pages/Home'
import { store } from './component/redux/store'
import { Provider } from 'react-redux'
function App() {
	return (
		<>
			<Provider store={store}>
				<Home />
			</Provider>
		</>
	)
}

export default App
