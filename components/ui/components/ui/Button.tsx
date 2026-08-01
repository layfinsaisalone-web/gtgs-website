import Link from "next/link";

interface ButtonProps {
  text: string;
  href: string;
}

export default function Button({
  text,
  href,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-full transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
    >
      {text}
    </Link>
  );
}