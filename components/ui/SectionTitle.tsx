interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : "text-left"} ${className}`}>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg text-slate-600 mx-auto">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-20 rounded-full bg-cyan-500 ${
          centered ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}