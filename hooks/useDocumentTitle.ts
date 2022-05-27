import React, { useEffect, useRef } from 'react';

/**
 * Sets the page's subtitle
 */
const useDocumentTitle = (title: string, prevailOnUnmount: boolean = false) => {
	const defaultTitle = useRef(document.title);

	useEffect(() => {
		document.title = `${title} | Olimp Agency`;
	}, [title]);

	useEffect(
		() => () => {
			if (!prevailOnUnmount) {
				document.title = defaultTitle.current;
			}
		},
		[]
	);
};

export default useDocumentTitle;
