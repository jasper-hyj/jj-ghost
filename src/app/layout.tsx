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
			<body className="w-100">
				{children}
				{/* Static js */}
				<Script
					src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js"
					integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D"
					crossOrigin="anonymous"
					async
				/>

				<Script type="text/javascript" src="/static/js/style.js" />
				<Script
					type="text/javascript"
					src="/static/js/bootstrap.bundle.min.js"
				/>
				<Script id="resize-script">
					window.onload = window.dispatchEvent(new Event("resize"));
				</Script>
			</body>
		</html>
	);
}
