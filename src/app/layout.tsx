"use server";
import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";

export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	return (
		<html lang={params.locale}>
			<body className="container-fluid">
				{children}

				<Script type="text/javascript" src="../js/style.js" />
			</body>
		</html>
	);
}
