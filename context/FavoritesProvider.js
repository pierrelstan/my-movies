import { useState, createContext } from "react";

export const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
	const [favorites, setFavorites] = useState({ favorites: [] });

	return (
		<FavoritesContext.Provider value={{ favorites, setFavorites }}>
			{children}
		</FavoritesContext.Provider>
	);
};
export default FavoritesProvider;
