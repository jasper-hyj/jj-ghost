"use client";
import Image from "next/image";

export default function Icon() {
	return (
		<Image
			src="/icon.svg"
			width={35}
			height={35}
			className="d-inline-block me-2"
			alt=""
		/>
	);
}
