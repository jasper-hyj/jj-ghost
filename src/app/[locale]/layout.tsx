"use server";
import "./global.css";

export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	return <>{children}</>;
}
