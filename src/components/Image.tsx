import NextImage from "next/image";

export type ImageType = "character" | "flag";

type ImageProps = {
  alt?: string;
  className?: string;
  type?: ImageType;
};

const imageSources: Record<ImageType, string> = {
  character: "/images/character-2.png",
  flag: "/images/flag.png",
};

export default function Image({
  alt = "",
  className = "",
  type = "character",
}: ImageProps) {
  const isFlag = type === "flag";

  return (
    <NextImage
      alt={alt}
      aria-hidden={alt ? undefined : true}
      className={`object-cover ${isFlag ? "size-12 rounded-scaled-media" : "aspect-square w-50 max-w-full"} ${className}`}
      data-name="Image"
      height={isFlag ? 48 : 201}
      src={imageSources[type]}
      width={isFlag ? 48 : 201}
    />
  );
}
