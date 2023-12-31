import { createContext, useContext, useState } from "react"

const ShareContext = createContext()

const ShareProvider = ({ children }) => {
	const [user, setUser] = useState(null)

	return <ShareContext.Provider value={{ user, setUser }}>{children}</ShareContext.Provider>
}

export const ShareState = () => {
	return useContext(ShareContext)
}

export default ShareProvider
