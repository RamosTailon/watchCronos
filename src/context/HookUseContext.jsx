import { createContext } from "react";

import { useState } from 'react';

export const SettingsWatchContext = createContext();

export const HookUseContext = ({ children }) => {

	let contextValue = {
		text: 'Vamos adorar',
		minutes: 1,
		seconds: 30,
		fileVideo: "VIDEOS/VIDEO 2.mp4",
		color: "#800080",
		font: "Verdana",
		opacityColor: 1,
		upper: false
	};

	const [watchState, setWatchState] = useState(contextValue);

	return (
		<SettingsWatchContext.Provider value={{ watchState, setWatchState }}>
			{children}
		</SettingsWatchContext.Provider>
	);

};  