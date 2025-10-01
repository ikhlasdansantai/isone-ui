export default function HeroHeading() {
  return (
    <div className="hero__header space-y-7 text-center max-w-5xl mx-auto font-space-grotesk">
      <h1 className="max-[355px]:text-2xl text-4xl sm:text-5xl lg:text-7xl/[1.25] font-bold text-balance leading-normal">
        UI<span className="text-muted-foreground">'s</span> that Works Across
        Frameworks
        {/* UI Components that Work Across Frameworks */}
      </h1>
      <p className="text-muted-foreground text-pretty xl:text-lg">
        Stop wasting time hunting for UI components. Right here, you just need
        to copy and paste.
      </p>
    </div>
  );
}
