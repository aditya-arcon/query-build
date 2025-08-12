import { ChevronDownIcon, MoreHorizontalIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

export const DataTablesSection = (): JSX.Element => {
  // Table 1 file data
  const table1Files = [
    { id: "file1", name: "why_willfully_gleefully.xlx", checked: true },
    { id: "file2", name: "promote_hog.rtf", checked: true },
    { id: "file3", name: "lamp_hmph.rmi", checked: false },
    { id: "file4", name: "spry.dist", checked: false },
    { id: "file5", name: "Item Name 5", checked: false },
    { id: "file6", name: "why_willfully_gleefully.xlx", checked: false },
    { id: "file7", name: "vacillate_gestate.tar", checked: false },
    { id: "file8", name: "true_clergyman.lrf", checked: false },
    { id: "file9", name: "put_transparency_unless.xlm", checked: false },
    { id: "file10", name: "next_yoyo_purple.pot", checked: false },
  ];

  // Tables data
  const tables = [
    { id: "table1", name: "Table 1", expanded: true, active: true },
    { id: "table2", name: "Table 2", expanded: false, active: false },
    { id: "table3", name: "Table 3", expanded: false, active: false },
    { id: "table4", name: "Table 4", expanded: false, active: false },
    { id: "table5", name: "Table 5", expanded: false, active: false },
    { id: "table6", name: "Table 6", expanded: false, active: false },
    { id: "table7", name: "Table 7", expanded: false, active: false },
  ];

  return (
    <section className="flex flex-col w-full border-r border-[#d0d4e4]">
      <header className="flex h-12 items-center gap-2 px-3 py-0 border-b border-[#d0d4e4]">
        <h2 className="font-fourth-heading-medium text-[#172b4d] text-[length:var(--fourth-heading-medium-font-size)] tracking-[var(--fourth-heading-medium-letter-spacing)] leading-[var(--fourth-heading-medium-line-height)]">
          Data
        </h2>
      </header>

      <div className="flex flex-col">
        {tables.map((table) => (
          <div key={table.id} className="flex flex-col">
            {/* Table header */}
            <div className="flex-col gap-1 pt-2 pb-0 px-3">
              <div className="flex h-7 items-center justify-center py-3">
                <div className="flex items-center justify-between px-2 py-0 w-full mt-[-10px] mb-[-10px]">
                  <div className="flex items-center gap-[7px]">
                    <Checkbox className="w-4 h-4 rounded border-[#c3c6d4]" />
                    <span
                      className={`font-subtitle-2-large text-[length:var(--subtitle-2-large-font-size)] tracking-[var(--subtitle-2-large-letter-spacing)] leading-[var(--subtitle-2-large-line-height)] ${
                        table.active ? "text-[#0073ea]" : "text-[#505258]"
                      }`}
                    >
                      {table.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {table.active && (
                      <>
                        <div className="flex w-6 h-6 items-center justify-center p-2 bg-white rounded-[100px]">
                          <img
                            className="h-4 w-4"
                            alt="Element icons"
                            src="/figmaAssets/16-icons-2.svg"
                          />
                        </div>
                        <MoreHorizontalIcon className="h-4 w-4" />
                      </>
                    )}
                    {!table.active && <ChevronDownIcon className="h-4 w-4" />}
                  </div>
                </div>
              </div>

              {/* Table content - only shown for Table 1 */}
              {table.expanded && (
                <Card className="flex flex-col items-start gap-px p-2 bg-[#f6f7fb] rounded border-none shadow-none">
                  <CardContent className="p-0 w-full">
                    {table1Files.map((file, index) => (
                      <div
                        key={file.id}
                        className={`h-8 items-center gap-1 px-2 py-0 flex relative w-full rounded ${
                          file.checked ? "bg-[#e6f1fd]" : ""
                        }`}
                      >
                        <div className="flex items-center justify-between relative flex-1 grow rounded">
                          <div className="flex h-8 items-center gap-[5px]">
                            <div
                              className={`flex w-4 h-4 items-center justify-center p-2 relative rounded border border-solid ${
                                file.checked
                                  ? "bg-[#0073ea] border-[#0073ea]"
                                  : "bg-white border-[#c3c6d4]"
                              }`}
                            >
                              {file.checked && (
                                <img
                                  className="relative mt-[-7px] mb-[-7px] ml-[-7px] mr-[-7px]"
                                  alt="Element icons"
                                  src="/figmaAssets/14-icons.svg"
                                />
                              )}
                            </div>
                            <span className="font-medium text-[#505258] text-[13px]">
                              {file.name}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
