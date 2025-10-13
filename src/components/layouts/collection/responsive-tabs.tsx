import type { Dispatch, SetStateAction } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { ResponsiveTabProps } from "@/data/enums/responsive-tabs-props.enum";
import { RESPONSIVE_TABS } from "@/data/const/responsive-tabs";

export default function ResponsiveTabs({
  activeTab,
  setActiveTab,
}: {
  activeTab: ResponsiveTabProps;
  setActiveTab: Dispatch<SetStateAction<ResponsiveTabProps>>;
}) {
  return (
    <div className="hidden md:block">
      <Tabs
        defaultValue={activeTab.toLocaleLowerCase()}
        className="w-full"
        onValueChange={(tab) => setActiveTab(tab as ResponsiveTabProps)}
      >
        <TabsList>
          {RESPONSIVE_TABS.map((tab) => (
            <TabsTrigger
              className="cursor-pointer"
              key={tab}
              value={tab.toLocaleLowerCase()}
              aria-label={`Switch to ${tab} view`}
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
        {RESPONSIVE_TABS.map((tab) => (
          <TabsContent
            key={tab}
            value={tab.toLowerCase()}
            className="hidden"
          />
        ))}
      </Tabs>
    </div>
  );
}
