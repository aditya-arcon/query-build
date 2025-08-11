import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ArrowLeftIcon, PlayIcon, SaveIcon, DownloadIcon, ShareIcon } from "lucide-react";
import { Link } from "wouter";

export const PreviewQuery = (): JSX.Element => {
  // Sample SQL query data
  const sqlQuery = `SELECT 
    s.sale_id,
    s.sale_date,
    s.sales_amount,
    c.customer_name,
    p.product_name
FROM 
    sales s
JOIN 
    customers c ON s.customer_id = c.customer_id
JOIN 
    products p ON s.product_id = p.product_id
WHERE 
    s.sale_date >= '2024-01-01'
ORDER BY 
    s.sale_date DESC`;

  // Sample result data
  const queryResults = [
    { sale_id: 1001, sale_date: "2024-08-10", sales_amount: "$1,250.00", customer_name: "John Smith", product_name: "Premium Widget" },
    { sale_id: 1002, sale_date: "2024-08-09", sales_amount: "$890.50", customer_name: "Sarah Johnson", product_name: "Standard Widget" },
    { sale_id: 1003, sale_date: "2024-08-09", sales_amount: "$2,100.00", customer_name: "Mike Brown", product_name: "Deluxe Widget" },
    { sale_id: 1004, sale_date: "2024-08-08", sales_amount: "$675.25", customer_name: "Emily Davis", product_name: "Basic Widget" },
    { sale_id: 1005, sale_date: "2024-08-08", sales_amount: "$1,450.00", customer_name: "Robert Wilson", product_name: "Premium Widget" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#f6f7fb]">
      {/* Header */}
      <header className="flex h-[52px] items-center justify-between pl-5 pr-[19px] py-2.5 w-full bg-white border-b border-[#d0d4e4]">
        <div className="flex items-center gap-3">
          <Link to="/build-query">
            <Button
              variant="ghost"
              size="icon"
              className="w-8 h-8 p-2 rounded-full"
              data-testid="button-back"
            >
              <ArrowLeftIcon className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="font-fourth-heading-large font-[number:var(--fourth-heading-large-font-weight)] text-[#172b4d] text-[length:var(--fourth-heading-large-font-size)] tracking-[var(--fourth-heading-large-letter-spacing)] leading-[var(--fourth-heading-large-line-height)] whitespace-nowrap [font-style:var(--fourth-heading-large-font-style)]">
            Query Preview
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="h-8 gap-1 pl-1.5 pr-2 py-[9px] bg-white rounded border border-solid border-[#0073ea] text-[#0073ea]"
            data-testid="button-run-query"
          >
            <PlayIcon className="w-4 h-4" />
            <span className="font-medium text-[13px] font-['Roboto',Helvetica]">
              Run Query
            </span>
          </Button>

          <Button
            className="h-8 gap-1 pl-1.5 pr-2 py-[9px] bg-[#0073ea] rounded text-white"
            data-testid="button-save-query"
          >
            <SaveIcon className="w-4 h-4" />
            <span className="font-medium text-[13px] font-['Roboto',Helvetica]">
              Save Query
            </span>
          </Button>

          <Separator orientation="vertical" className="h-6 bg-[#d0d4e4]" />

          <Button
            variant="outline"
            size="icon"
            className="w-8 h-8 p-2 rounded border border-[#d0d4e4]"
            data-testid="button-download"
          >
            <DownloadIcon className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="w-8 h-8 p-2 rounded border border-[#d0d4e4]"
            data-testid="button-share"
          >
            <ShareIcon className="h-4 w-4" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Tabs defaultValue="sql" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="sql" data-testid="tab-sql">SQL Query</TabsTrigger>
            <TabsTrigger value="results" data-testid="tab-results">Results</TabsTrigger>
            <TabsTrigger value="chart" data-testid="tab-chart">Chart View</TabsTrigger>
          </TabsList>

          <TabsContent value="sql" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-[#172b4d]">Generated SQL Query</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-[#1e1e1e] rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-white font-mono whitespace-pre-wrap">
                    <code>{sqlQuery}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-[#172b4d]">Query Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-[#505258]">Execution Time:</span>
                    <span className="ml-2 text-[#172b4d]">0.045 seconds</span>
                  </div>
                  <div>
                    <span className="font-medium text-[#505258]">Rows Returned:</span>
                    <span className="ml-2 text-[#172b4d]">1,247 rows</span>
                  </div>
                  <div>
                    <span className="font-medium text-[#505258]">Tables Used:</span>
                    <span className="ml-2 text-[#172b4d]">sales, customers, products</span>
                  </div>
                  <div>
                    <span className="font-medium text-[#505258]">Query Cost:</span>
                    <span className="ml-2 text-[#172b4d]">Low</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="results" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-[#172b4d]">Query Results (Showing first 5 rows)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-[#d0d4e4]">
                    <thead>
                      <tr className="bg-[#f6f7fb]">
                        <th className="border border-[#d0d4e4] px-3 py-2 text-left font-medium text-[#505258]">Sale ID</th>
                        <th className="border border-[#d0d4e4] px-3 py-2 text-left font-medium text-[#505258]">Sale Date</th>
                        <th className="border border-[#d0d4e4] px-3 py-2 text-left font-medium text-[#505258]">Sales Amount</th>
                        <th className="border border-[#d0d4e4] px-3 py-2 text-left font-medium text-[#505258]">Customer Name</th>
                        <th className="border border-[#d0d4e4] px-3 py-2 text-left font-medium text-[#505258]">Product Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      {queryResults.map((row, index) => (
                        <tr key={index} className="hover:bg-[#f6f7fb]">
                          <td className="border border-[#d0d4e4] px-3 py-2 text-[#172b4d]" data-testid={`cell-sale-id-${index}`}>{row.sale_id}</td>
                          <td className="border border-[#d0d4e4] px-3 py-2 text-[#172b4d]" data-testid={`cell-sale-date-${index}`}>{row.sale_date}</td>
                          <td className="border border-[#d0d4e4] px-3 py-2 text-[#172b4d]" data-testid={`cell-sales-amount-${index}`}>{row.sales_amount}</td>
                          <td className="border border-[#d0d4e4] px-3 py-2 text-[#172b4d]" data-testid={`cell-customer-name-${index}`}>{row.customer_name}</td>
                          <td className="border border-[#d0d4e4] px-3 py-2 text-[#172b4d]" data-testid={`cell-product-name-${index}`}>{row.product_name}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="chart" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-[#172b4d]">Data Visualization</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-[#f6f7fb] rounded-lg flex items-center justify-center border border-[#d0d4e4]">
                  <p className="text-[#505258]">Chart visualization would be displayed here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};