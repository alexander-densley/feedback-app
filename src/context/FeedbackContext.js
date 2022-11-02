import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([
		{
			id: 1,
			text: 'This is a test feedback',
			rating: 10,
		},
	])

	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	})

	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4()
		setFeedback([newFeedback, ...feedback])
	}

	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure you want to delete this feedback?')) {
			const newFeedback = feedback.filter((item) => item.id !== id)
			setFeedback(newFeedback)
		}
	}

	const editFeedback = (item) => {
		setFeedbackEdit({ item, edit: true })
	}

	const updateFeedback = (id, updatedFeedback) => {
		setFeedback(
			feedback.map((item) =>
				item.id === id ? { ...item, ...updatedFeedback } : item
			)
		)
	}

	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				feedbackEdit,
				addFeedback,
				deleteFeedback,
				editFeedback,
				updateFeedback,
			}}
		>
			{children}
		</FeedbackContext.Provider>
	)
}

export default FeedbackContext
