"use client";
import Image from "next/image";

export default function AnimeCarouselImg({ src }: { src: string }) {
	return (
		<Image
			width={0}
			height={0}
			sizes="100vw"
			className="d-block object-fit-cover w-100 h-100"
			src={src}
			alt=""
		/>
	);
}
