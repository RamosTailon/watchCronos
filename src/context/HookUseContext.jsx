import { createContext } from "react";

import { useState } from 'react';

export const SettingsWatchContext = createContext();

export const HookUseContext = ({ children }) => {

	let contextValue = {
		text: 'Vamos adorar',
		minutes: 1,
		seconds: 30,
		fileVideo: "/video/*",
		color: "purple",
		font: "Verdana"
	};

	const [watchState, setWatchState] = useState(contextValue);

	return (
		<SettingsWatchContext.Provider value={{ watchState, setWatchState }}>
			{children}
		</SettingsWatchContext.Provider>
	);

};  