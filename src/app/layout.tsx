"use server";
import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";

export async function generateStaticParams() {
	return [{ lang: "en" }, { lang: "zh" }];
}
export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	return (
		<html
			className="h-100 w-100"
			lang={params.locale}
			data-bs-theme="light"
		>
			{/* body: with filled container */}
			<body className="h-100 w-100">
				{children}
				{/* Static js */}
				<Script type="text/javascript" src="/static/js/style.js" />
				<Script
					type="text/javascript"
					src="/static/js/bootstrap.bundle.min.js"
				/>
			</body>
		</html>
	);
}
