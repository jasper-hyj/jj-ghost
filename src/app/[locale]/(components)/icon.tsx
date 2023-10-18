"use client";
import Image from "next/image";

export default function Icon() {
	return (
		<Image
			src="/icon.svg"
			width={30}
			height={30}
			className="d-inline-block align-top"
			alt=""
		/>
	);
}
