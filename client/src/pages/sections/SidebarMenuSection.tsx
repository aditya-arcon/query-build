import { EyeIcon, SaveIcon, XIcon, FolderIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export const SidebarMenuSection = (): JSX.Element => {
  return (
    <header className="flex h-[52px] items-center justify-between pl-5 pr-[19px] py-2.5 w-full bg-white border-b border-[#d0d4e4]">
      <h1 className="font-fourth-heading-large font-[number:var(--fourth-heading-large-font-weight)] text-[#172b4d] text-[length:var(--fourth-heading-large-font-size)] tracking-[var(--fourth-heading-large-letter-spacing)] leading-[var(--fourth-heading-large-line-height)] whitespace-nowrap [font-style:var(--fourth-heading-large-font-style)]">
        Build Query
      </h1>

      <div className="flex items-center gap-1">
        <div className="flex items-start gap-2 pr-3 border-r border-[#d0d4e4]">
          <Link to="/preview-query">
            <Button
              variant="outline"
              className="h-8 gap-1 pl-1.5 pr-2 py-[9px] bg-white rounded border border-solid border-[#0073ea] text-[#0073ea]"
              data-testid="button-preview"
            >
              <EyeIcon className="w-4 h-4" />
              <span className="font-medium text-[13px] font-['Roboto',Helvetica]">
                Preview
              </span>
            </Button>
          </Link>

          <Link to="/saved-queries">
            <Button className="h-8 gap-1 pl-1.5 pr-2 py-[9px] bg-[#0073ea] rounded text-white" data-testid="button-save">
              <SaveIcon className="w-4 h-4" />
              <span className="font-medium text-[13px] font-['Roboto',Helvetica]">
                Save
              </span>
            </Button>
          </Link>
        </div>

        <Link to="/saved-queries">
          <Button
            variant="outline"
            className="h-8 gap-1 pl-1.5 pr-2 py-[9px] bg-white rounded border border-solid border-[#d0d4e4] text-[#505258] mr-2"
            data-testid="button-saved-queries"
          >
            <FolderIcon className="w-4 h-4" />
            <span className="font-medium text-[13px] font-['Roboto',Helvetica]">
              Saved
            </span>
          </Button>
        </Link>

        <Button
          variant="ghost"
          size="icon"
          className="w-7 h-7 p-2 rounded-full"
        >
          <XIcon className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
};
