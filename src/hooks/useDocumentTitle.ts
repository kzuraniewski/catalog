export const websiteName = 'Katalog';

const useDocumentTitle = (title?: string) => {
	const docTitle = title ? `${title} | ${websiteName}` : websiteName;

	return { title: docTitle };
};

export default useDocumentTitle;
