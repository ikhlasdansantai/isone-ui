import Heading from "@/components/ui/Heading";

export default function FeatureHeader() {
  return (
    <div className="titles max-w-xl mx-auto text-center">
      <Heading>Built by developers, for developers</Heading>
      <p className="mt-4 leading-relaxed">
        Our components designed with accessibility, modern standards, and
        developer best practices in mind.
        {/* isone ui delivers ready-to-use components for React, Vue, and Svelte. every piece is copy-paste friendly, accessible, and aligned with modern developer best practices. */}
        {/* Built on React v19.1, Tailwind CSS v4.1, TypeScript v5.8, and React
        Aria, our components deliver modern performance, type safety, and
        maintainability. */}
      </p>
    </div>
  );
}
