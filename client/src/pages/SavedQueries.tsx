import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  SearchIcon, 
  PlusIcon, 
  MoreHorizontalIcon, 
  PlayIcon, 
  EditIcon, 
  TrashIcon,
  FolderIcon,
  ClockIcon,
  UserIcon
} from "lucide-react";
import { Link } from "wouter";

export const SavedQueries = (): JSX.Element => {
  // Sample saved queries data
  const savedQueries = [
    {
      id: 1,
      name: "Sales Performance Report",
      description: "Monthly sales data with customer information",
      lastModified: "2024-08-10",
      createdBy: "John Smith",
      category: "Sales",
      isPublic: true,
      executionTime: "0.045s",
      rowCount: "1,247 rows"
    },
    {
      id: 2,
      name: "Customer Analysis Query",
      description: "Detailed customer behavior and purchase patterns",
      lastModified: "2024-08-09",
      createdBy: "Sarah Johnson",
      category: "Analytics",
      isPublic: false,
      executionTime: "0.123s",
      rowCount: "834 rows"
    },
    {
      id: 3,
      name: "Product Inventory Status",
      description: "Current stock levels and reorder points",
      lastModified: "2024-08-08",
      createdBy: "Mike Brown",
      category: "Inventory",
      isPublic: true,
      executionTime: "0.067s",
      rowCount: "456 rows"
    },
    {
      id: 4,
      name: "Revenue Trends Analysis",
      description: "Quarterly revenue breakdown by product category",
      lastModified: "2024-08-07",
      createdBy: "Emily Davis",
      category: "Finance",
      isPublic: false,
      executionTime: "0.089s",
      rowCount: "2,156 rows"
    },
    {
      id: 5,
      name: "Top Customers Report",
      description: "High-value customers and their purchase history",
      lastModified: "2024-08-06",
      createdBy: "Robert Wilson",
      category: "Sales",
      isPublic: true,
      executionTime: "0.034s",
      rowCount: "89 rows"
    }
  ];

  const categories = ["All", "Sales", "Analytics", "Inventory", "Finance"];

  return (
    <div className="flex flex-col min-h-screen bg-[#f6f7fb]">
      {/* Header */}
      <header className="flex h-[52px] items-center justify-between pl-5 pr-[19px] py-2.5 w-full bg-white border-b border-[#d0d4e4]">
        <h1 className="font-fourth-heading-large font-[number:var(--fourth-heading-large-font-weight)] text-[#172b4d] text-[length:var(--fourth-heading-large-font-size)] tracking-[var(--fourth-heading-large-letter-spacing)] leading-[var(--fourth-heading-large-line-height)] whitespace-nowrap [font-style:var(--fourth-heading-large-font-style)]">
          Saved Queries
        </h1>

        <div className="flex items-center gap-2">
          <Link to="/build-query">
            <Button
              className="h-8 gap-1 pl-1.5 pr-2 py-[9px] bg-[#0073ea] rounded text-white"
              data-testid="button-new-query"
            >
              <PlusIcon className="w-4 h-4" />
              <span className="font-medium text-[13px] font-['Roboto',Helvetica]">
                New Query
              </span>
            </Button>
          </Link>
        </div>
      </header>

      {/* Search and Filters */}
      <div className="p-6 bg-white border-b border-[#d0d4e4]">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative flex-1 max-w-md">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#505258]" />
            <Input
              placeholder="Search queries..."
              className="pl-10 h-10 border-[#d0d4e4]"
              data-testid="input-search"
            />
          </div>
        </div>

        <div className="flex gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
              className={`h-8 ${
                category === "All" 
                  ? "bg-[#0073ea] text-white" 
                  : "border-[#d0d4e4] text-[#505258]"
              }`}
              data-testid={`filter-${category.toLowerCase()}`}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Query List */}
      <div className="flex-1 p-6">
        <div className="grid gap-4">
          {savedQueries.map((query) => (
            <Card key={query.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-lg font-semibold text-[#172b4d]" data-testid={`query-name-${query.id}`}>
                        {query.name}
                      </CardTitle>
                      <Badge 
                        variant={query.isPublic ? "default" : "secondary"}
                        className={`text-xs ${
                          query.isPublic 
                            ? "bg-[#e6f1fd] text-[#0073ea]" 
                            : "bg-[#f6f7fb] text-[#505258]"
                        }`}
                      >
                        {query.isPublic ? "Public" : "Private"}
                      </Badge>
                      <Badge 
                        variant="outline"
                        className="text-xs border-[#d0d4e4] text-[#505258]"
                      >
                        {query.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-[#505258] mb-3" data-testid={`query-description-${query.id}`}>
                      {query.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-[#505258]">
                      <div className="flex items-center gap-1">
                        <ClockIcon className="h-3 w-3" />
                        <span>Modified {query.lastModified}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <UserIcon className="h-3 w-3" />
                        <span>by {query.createdBy}</span>
                      </div>
                      <div>
                        <span>{query.executionTime} • {query.rowCount}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 ml-4">
                    <Link to="/preview-query">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 gap-1 border-[#0073ea] text-[#0073ea]"
                        data-testid={`button-run-${query.id}`}
                      >
                        <PlayIcon className="h-3 w-3" />
                        Run
                      </Button>
                    </Link>
                    <Link to="/build-query">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 gap-1 border-[#d0d4e4] text-[#505258]"
                        data-testid={`button-edit-${query.id}`}
                      >
                        <EditIcon className="h-3 w-3" />
                        Edit
                      </Button>
                    </Link>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      data-testid={`button-more-${query.id}`}
                    >
                      <MoreHorizontalIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Empty State (if no queries) */}
        {savedQueries.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <FolderIcon className="h-12 w-12 text-[#d0d4e4] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[#172b4d] mb-2">No saved queries</h3>
              <p className="text-[#505258] mb-4">Create your first query to get started</p>
              <Link to="/build-query">
                <Button className="bg-[#0073ea] text-white" data-testid="button-create-first-query">
                  <PlusIcon className="w-4 h-4 mr-2" />
                  Create Query
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};