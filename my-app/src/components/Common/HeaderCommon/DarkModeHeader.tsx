import { useState } from "react";

const DarkModeHeader = () => {
	const [dark, setDark] = useState<boolean>(false);

	const onToggleDarkMode = () => {
		if (!dark) {
			document.documentElement.classList.add("dark");
			setDark((e) => !e);
		} else {
			document.documentElement.classList.remove("dark");
			setDark((e) => !e);
		}
	};

	return (
		<label className="swap swap-flip mr-2 sm:mr-4 text-3xl">
			<input type="checkbox" className="js-theme" onChange={onToggleDarkMode} />
			<div className="swap-on">😈</div>
			<div className="swap-off">😇</div>
		</label>
	);
};

export default DarkModeHeader;
