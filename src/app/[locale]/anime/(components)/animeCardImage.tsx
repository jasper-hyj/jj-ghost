"use client";
import Image from "next/image";

export default function AnimeCardImg({ src }: { src: string }) {
	return (
		<Image
			width={0}
			height={0}
			sizes="100vw"
			style={{ width: "100%", height: "auto" }}
			className="bd-placeholder-img card-img-top"
			role="img"
			src={src}
			alt=""
			priority
		/>
	);
}
