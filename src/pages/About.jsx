import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'
function About() {
	return (
		<Card>
			<h1>About this Project</h1>
			<p>
				This is a React app designed to allow customers to leave
				feedback for a product or service
			</p>
			<p>Version: 1.0.0</p>

			<p>
				<Link to='/'> Back to home</Link>
			</p>
		</Card>
	)
}
export default About
