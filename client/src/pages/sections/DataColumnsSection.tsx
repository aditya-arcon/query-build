import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const DataColumnsSection = (): JSX.Element => {
  // Data for expression items
  const expressionItems = [
    { id: 1, name: "next_yoyo_purple.pot", selected: true },
    { id: 2, name: "lamp_hmph.rmi", selected: false },
    { id: 3, name: "next_yoyo_purple.pot", selected: false },
    { id: 4, name: "promote_hog.rtf", selected: false },
  ];

  return (
    <div className="flex flex-col h-full w-full border-r border-[#d0d4e4]">
      {/* Header */}
      <header className="flex h-12 items-center px-3 border-b border-[#d0d4e4]">
        <h2 className="font-fourth-heading-medium text-[#172b4d] text-[length:var(--fourth-heading-medium-font-size)] tracking-[var(--fourth-heading-medium-letter-spacing)] leading-[var(--fourth-heading-medium-line-height)]">
          Expressions
        </h2>
      </header>

      {/* Expression items list */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex flex-col gap-px p-3">
          {expressionItems.map((item) => (
            <Card
              key={item.id}
              className={`border-0 rounded ${item.selected ? "bg-[#e6f1fd]" : "bg-white"}`}
            >
              <CardContent className="p-0">
                <button className="flex w-full h-8 items-center px-2 rounded text-left">
                  <span className="font-medium text-[#505258] text-[13px] font-['Roboto',Helvetica]">
                    {item.name}
                  </span>
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
