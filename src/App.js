import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import About from './pages/About'
import { FeedbackProvider } from './context/FeedbackContext'
import AboutIcon from './components/AboutIcon'

function App() {
	return (
		<FeedbackProvider>
			<Router>
				<Header />
				<div className='container'>
					<Routes>
						<Route
							exact
							path='/'
							element={
								<>
									<FeedbackForm />
									<FeedbackStats />
									<FeedbackList />
								</>
							}
						></Route>

						<Route path='/about' element={<About />} />
						<Route path='*' element={<h1>404: Not Found</h1>} />
					</Routes>
					<AboutIcon />
				</div>
			</Router>
		</FeedbackProvider>
	)
}

export default App
