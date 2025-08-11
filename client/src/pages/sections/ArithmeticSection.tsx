import { PlayIcon, PlusIcon, RotateCcwIcon, RotateCwIcon } from "lucide-react";
import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QueryEditor } from "@/components/QueryEditor";

export const ArithmeticSection = (): JSX.Element => {


  // Data for main navigation tabs
  const mainTabs = [
    { id: "columns", label: "Columns", isActive: false },
    { id: "joins", label: "Joins", isActive: false },
    { id: "conditions", label: "Conditions", isActive: false },
    { id: "sorting", label: "Sorting", isActive: false },
  ];

  // Data for secondary tabs
  const secondaryTabs = [
    { id: "data-type", label: "Data Type", isActive: false },
    { id: "aggregate", label: "Aggregate", isActive: false },
    { id: "functions", label: "Functions", isActive: false },
    { id: "confidential", label: "Confidential", isActive: false },
    { id: "distinct", label: "Distinct", isActive: false },
    { id: "case", label: "Case", isActive: false },
    { id: "arithmetic", label: "Arithmetic Operations", isActive: true },
  ];

  // Data for arithmetic operations
  const arithmeticOperations = [
    { id: "addition", label: "Addition (+)", isSelected: true },
    { id: "subtraction", label: "Subtraction (-)", isSelected: false },
    { id: "multiplication", label: "Multiplication (*)", isSelected: false },
    { id: "division", label: "Division (/)", isSelected: false },
    { id: "modulo", label: "Modulo (%)", isSelected: false },
    { id: "power", label: "Power (^)", isSelected: false },
  ];

  return (
    <div className="flex flex-col items-start gap-[11px] relative flex-1 self-stretch grow">
      <div className="flex-col gap-4 pt-[11px] pb-4 px-4 flex-1 grow flex items-start relative self-stretch w-full">
        <div className="flex flex-col items-start gap-[11px] relative self-stretch w-full flex-[0_0_auto]">
          <Tabs defaultValue="columns" className="w-full">
            <TabsList className="flex w-full items-start gap-2 relative border-b border-[#d0d4e4] bg-transparent h-auto p-0 justify-start">
              {mainTabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className={`inline-flex flex-col h-[42px] items-start justify-center gap-2 relative flex-[0_0_auto] ${
                    tab.isActive ? "border-b-2 border-[#0073ea]" : ""
                  }`}
                  asChild
                >
                  <Link to="/build-query">
                    <div
                      className={`flex h-8 items-center justify-center gap-2 p-2 relative self-stretch w-full ${
                        tab.isActive ? "bg-[#e3e5f0]" : "bg-white"
                      } rounded`}
                    >
                      <div
                        className={`relative w-fit mt-[-1.00px] font-button-medium font-[number:var(--button-medium-font-weight)] ${
                          tab.isActive ? "text-[#172b4d]" : "text-[#505258]"
                        } text-[length:var(--button-medium-font-size)] tracking-[var(--button-medium-letter-spacing)] leading-[var(--button-medium-line-height)] [font-style:var(--button-medium-font-style)]`}
                      >
                        {tab.label}
                      </div>
                    </div>
                  </Link>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <Card className="flex flex-col items-start gap-3 p-3 relative self-stretch w-full flex-[0_0_auto] bg-[#f6f7fb] border-none rounded">
          <Tabs defaultValue="arithmetic" className="w-full">
            <TabsList className="flex w-full items-start gap-px pl-px pr-0 pt-px pb-0 relative flex-[0_0_auto] rounded-[4px_4px_0px_0px] bg-transparent h-auto p-0 justify-start">
              {secondaryTabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className={`inline-flex h-8 items-center justify-center gap-2 p-2 relative flex-[0_0_auto] ${
                    tab.isActive ? "bg-[#132748]" : ""
                  } rounded`}
                  asChild
                >
                  {tab.id === "arithmetic" ? (
                    <Link to="/arithmetic">
                      <div
                        className={`relative w-fit mt-[-1.00px] font-button-medium font-[number:var(--button-medium-font-weight)] ${
                          tab.isActive ? "text-white" : "text-[#505258]"
                        } text-[length:var(--button-medium-font-size)] tracking-[var(--button-medium-letter-spacing)] leading-[var(--button-medium-line-height)] [font-style:var(--button-medium-font-style)]`}
                      >
                        {tab.label}
                      </div>
                    </Link>
                  ) : tab.id === "case" ? (
                    <Link to="/case">
                      <div
                        className={`relative w-fit mt-[-1.00px] font-button-medium font-[number:var(--button-medium-font-weight)] ${
                          tab.isActive ? "text-white" : "text-[#505258]"
                        } text-[length:var(--button-medium-font-size)] tracking-[var(--button-medium-letter-spacing)] leading-[var(--button-medium-line-height)] [font-style:var(--button-medium-font-style)]`}
                      >
                        {tab.label}
                      </div>
                    </Link>
                  ) : tab.id === "distinct" ? (
                    <Link to="/distinct">
                      <div
                        className={`relative w-fit mt-[-1.00px] font-button-medium font-[number:var(--button-medium-font-weight)] ${
                          tab.isActive ? "text-white" : "text-[#505258]"
                        } text-[length:var(--button-medium-font-size)] tracking-[var(--button-medium-letter-spacing)] leading-[var(--button-medium-line-height)] [font-style:var(--button-medium-font-style)]`}
                      >
                        {tab.label}
                      </div>
                    </Link>
                  ) : tab.id === "aggregate" ? (
                    <Link to="/aggregate">
                      <div
                        className={`relative w-fit mt-[-1.00px] font-button-medium font-[number:var(--button-medium-font-weight)] ${
                          tab.isActive ? "text-white" : "text-[#505258]"
                        } text-[length:var(--button-medium-font-size)] tracking-[var(--button-medium-letter-spacing)] leading-[var(--button-medium-line-height)] [font-style:var(--button-medium-font-style)]`}
                      >
                        {tab.label}
                      </div>
                    </Link>
                  ) : tab.id === "functions" ? (
                    <Link to="/functions">
                      <div
                        className={`relative w-fit mt-[-1.00px] font-button-medium font-[number:var(--button-medium-font-weight)] ${
                          tab.isActive ? "text-white" : "text-[#505258]"
                        } text-[length:var(--button-medium-font-size)] tracking-[var(--button-medium-letter-spacing)] leading-[var(--button-medium-line-height)] [font-style:var(--button-medium-font-style)]`}
                      >
                        {tab.label}
                      </div>
                    </Link>
                  ) : tab.id === "confidential" ? (
                    <Link to="/confidential">
                      <div
                        className={`relative w-fit mt-[-1.00px] font-button-medium font-[number:var(--button-medium-font-weight)] ${
                          tab.isActive ? "text-white" : "text-[#505258]"
                        } text-[length:var(--button-medium-font-size)] tracking-[var(--button-medium-letter-spacing)] leading-[var(--button-medium-line-height)] [font-style:var(--button-medium-font-style)]`}
                      >
                        {tab.label}
                      </div>
                    </Link>
                  ) : tab.id === "data-type" ? (
                    <Link to="/build-query">
                      <div
                        className={`relative w-fit mt-[-1.00px] font-button-medium font-[number:var(--button-medium-font-weight)] ${
                          tab.isActive ? "text-white" : "text-[#505258]"
                        } text-[length:var(--button-medium-font-size)] tracking-[var(--button-medium-letter-spacing)] leading-[var(--button-medium-line-height)] [font-style:var(--button-medium-font-style)]`}
                      >
                        {tab.label}
                      </div>
                    </Link>
                  ) : (
                    <div
                      className={`relative w-fit mt-[-1.00px] font-button-medium font-[number:var(--button-medium-font-weight)] ${
                        tab.isActive ? "text-white" : "text-[#505258]"
                      } text-[length:var(--button-medium-font-size)] tracking-[var(--button-medium-letter-spacing)] leading-[var(--button-medium-line-height)] [font-style:var(--button-medium-font-style)]`}
                    >
                      {tab.label}
                    </div>
                  )}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <CardContent className="flex flex-row gap-3 p-3 relative self-stretch w-full flex-[0_0_auto] bg-white rounded overflow-hidden">
            <div className="flex gap-3 flex-wrap">
              {arithmeticOperations.map((operation) => (
                <Button
                  key={operation.id}
                  variant={operation.isSelected ? "default" : "outline"}
                  size="sm"
                  className={`h-8 px-3 text-sm font-medium ${
                    operation.isSelected
                      ? "bg-[#0073ea] text-white border-[#0073ea]"
                      : "bg-white text-[#505258] border-[#d0d4e4] hover:bg-[#f6f7fb]"
                  }`}
                  data-testid={`arithmetic-operation-${operation.id}`}
                >
                  {operation.label}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <QueryEditor />
      </div>
    </div>
  );
};