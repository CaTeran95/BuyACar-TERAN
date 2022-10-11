import React, { createContext, useState } from "react";
import {
	collection,
	doc,
	getDocs,
	getDoc,
	query,
	where,
} from "firebase/firestore";
import { db } from "../utils/firebase";

export const InfoContext = createContext();

export const InfoProvider = ({ children }) => {
	const [catalog, setCatalog] = useState([]);
	const [itemDetail, setItemDetail] = useState({});
	const [logos, setLogos] = useState([]);

	const getCatalog = async (filter, value) => {
		try {
			const queryRef = filter
				? query(collection(db, "Cars"), where(filter, "==", value))
				: collection(db, "Cars");
			const data = await getDocs(queryRef);
			const list = data.docs.map((item) => {
				return { ...item.data(), id: item.id };
			});
			setCatalog(list);
		} catch (error) {
			console.log("There was an error: ", error);
		}
	};

	const getItemDetail = async (id) => {
		try {
			const queryRef = doc(db, "Cars", id);
			const data = await getDoc(queryRef);
			const item = { ...data.data(), id: data.id };
			setItemDetail(item);
		} catch (error) {
			console.log("There was an error: ", error);
		}
	};

	const getLogos = async () => {
		const queryRef = collection(db, "Logos");
		const data = await getDocs(queryRef);
		const list = data.docs.map((item) => {
			return { ...item.data(), id: item.id };
		});
		setLogos(list);
	};

	return (
		<InfoContext.Provider
			value={{
				logos,
				getLogos,
				catalog,
				getCatalog,
				itemDetail,
				getItemDetail
			}}
		>
			{children}
		</InfoContext.Provider>
	);
};
