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
		setFeedbackEdit({ item: {}, edit: false })
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
		setFeedbackEdit({ item: {}, edit: false })
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
