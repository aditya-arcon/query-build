import React from "react";
import { Separator } from "@/components/ui/separator";
import { DataColumnsSection } from "./sections/DataColumnsSection";
import { DataTablesSection } from "./sections/DataTablesSection";
import { SidebarMenuSection } from "./sections/SidebarMenuSection";
import { FunctionsSection } from "./sections/FunctionsSection";

export const FunctionsPage = (): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen">
      <SidebarMenuSection />

      <div className="flex flex-1 w-full bg-white">
        <div className="w-[23%]">
          <DataTablesSection />
        </div>

        <Separator orientation="vertical" className="h-full bg-[#dededd]" />

        <div className="w-[60%]">
          <FunctionsSection />
        </div>

        <Separator orientation="vertical" className="h-full bg-[#dededd]" />

        <div className="w-[16%]">
          <DataColumnsSection />
        </div>
      </div>
    </div>
  );
};