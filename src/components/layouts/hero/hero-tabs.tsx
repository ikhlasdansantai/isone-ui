import type { Dispatch, SetStateAction } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HeroTabs({
  value,
  setTab,
}: {
  value: string;
  setTab: Dispatch<SetStateAction<string>>;
}) {
  return (
    <Tabs
      defaultValue="preview"
      className="items-center"
      value={value}
      onValueChange={setTab}
    >
      <TabsList className="gap-1 bg-transparent">
        <TabsTrigger
          value="preview"
          className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full data-[state=active]:shadow-none"
        >
          Preview
        </TabsTrigger>
        <TabsTrigger
          value="code"
          className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full data-[state=active]:shadow-none"
        >
          Code
        </TabsTrigger>
      </TabsList>
      <TabsContent value="preview" className="hidden" />
      <TabsContent value="code" className="hidden" />
    </Tabs>
  );
}
