"use server";
import "./global.css";
import Icon from "./(components)/icon";
import "bootstrap/dist/css/bootstrap.min.css";
import { getDictionary } from "./dictionaries";

export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	const dict = await getDictionary(params.locale);
	return (
		<html lang="en">
			<body className="container-fluid">
				{/* <div className="container-lg">
					<nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary">
						<a className="navbar-brand" href="/">
							<Icon />{" "}
							<span className="navbar-brand mb-0 h1">
								JJ-Ghost
							</span>
						</a>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarText"
							aria-controls="navbarText"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarText"
						>
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item">
									<a
										className="nav-link active"
										aria-current="page"
										href="#"
									>
										Home
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Gropramming
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										JJ-anime
									</a>
								</li>
							</ul>
							<div className="navbar-nav ms-auto mb-2 mb-lg-0">
								<a
									className="nav-link"
									href={dict.nav.c_lang_link}
								>
									{dict.nav.c_lang}
								</a>
							</div>
						</div>
					</nav>
				</div> */}
				{children}
			</body>
		</html>
	);
}
