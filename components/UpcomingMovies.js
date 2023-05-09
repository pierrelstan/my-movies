import { getUpcomingMovies } from "../redux/actions/upcomingMoviesAction";
import axiosService from "../utils/ServicesAxios/axiosService";
import MoviesSkeleton from "./MoviesSkeleton";
import renderItem from "./RenderItem";
import List from "./common/List";
import Title from "./common/Title";
import React, { useEffect } from "react";
import { View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

export default function UpcomingMovies() {
	const dispatch = useDispatch();
	const { upcomingMovies, isLoading } = useSelector((state) => ({
		upcomingMovies: state.upcomingMovies.upcomingMovies,
		page: state.upcomingMovies.page,
		totalPages: state.upcomingMovies.totalPages,
		isLoading: state.upcomingMovies.isLoading
	}));

	useEffect(() => {
		dispatch(getUpcomingMovies());
		return () => {
			axiosService.CancelToken;
		};
	}, []);

	return (
		<View>
			<View>
				<Title title="Upcoming Movies" />
			</View>
			{isLoading ? (
				<MoviesSkeleton />
			) : (
				<List
					data={upcomingMovies}
					refreshing={isLoading}
					onEndReachedThreshold={0.2}
					initialNumToRender={10}
					item={renderItem}
				/>
			)}
		</View>
	);
}
