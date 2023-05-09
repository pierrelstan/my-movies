import React, { useEffect } from 'react';
import { View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import renderItem from "./RenderItem";
import { getMostPopularMovies } from "../redux/actions/moviesAction";
import axiosService from "../utils/ServicesAxios/axiosService";
import MoviesSkeleton from "./MoviesSkeleton";
import List from "./common/List";
import Title from "./common/Title";

export default function MostPopularMovies() {
	const dispatch = useDispatch();

	const { movies, isLoading } = useSelector((state) => ({
		movies: state.movies.movies,
		page: state.movies.page,
		totalPages: state.movies.totalPages,
		isLoading: state.movies.isLoading
	}));

	useEffect(() => {
		dispatch(getMostPopularMovies());
		return () => {
			axiosService.CancelToken;
		};
	}, []);
	return (
		<View>
			<View>
				<Title title="Most Popular" />
			</View>
			{isLoading && <MoviesSkeleton />}
			{!isLoading && (
				<List
					data={movies}
					refreshing={isLoading}
					onEndReachedThreshold={0.2}
					initialNumToRender={10}
					item={renderItem}
				/>
			)}
		</View>
	);
}


