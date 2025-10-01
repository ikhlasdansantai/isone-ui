export default function Heading({
  className,
  variant = "h2",
  children,
}: {
  className?: string;
  variant?: string;
  children?: React.ReactNode | string;
}) {
  if (variant === "h2") {
    return (
      <h2
        className={`${className} text-balance mx-auto font-semibold max-[350px]:text-xl max-sm:text-3xl sm:text-5xl leading-normal`}
      >
        {children}
      </h2>
    );
  } else {
    <h1> {children}</h1>;
  }
}
