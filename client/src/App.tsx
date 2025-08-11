import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { BuildQuery } from "@/pages/BuildQuery";
import { PreviewQuery } from "@/pages/PreviewQuery";
import { SavedQueries } from "@/pages/SavedQueries";
import { AggregatePage } from "@/pages/AggregatePage";
import { FunctionsPage } from "@/pages/FunctionsPage";
import { ConfidentialPage } from "@/pages/ConfidentialPage";
import { DistinctPage } from "@/pages/DistinctPage";
import { CasePage } from "@/pages/CasePage";
import { ArithmeticPage } from "@/pages/ArithmeticPage";

function Router() {
  return (
    <Switch>
      {/* Add pages below */}
      <Route path="/" component={BuildQuery} />
      <Route path="/build-query" component={BuildQuery} />
      <Route path="/preview-query" component={PreviewQuery} />
      <Route path="/saved-queries" component={SavedQueries} />
      <Route path="/aggregate" component={AggregatePage} />
      <Route path="/functions" component={FunctionsPage} />
      <Route path="/confidential" component={ConfidentialPage} />
      <Route path="/distinct" component={DistinctPage} />
      <Route path="/case" component={CasePage} />
      <Route path="/arithmetic" component={ArithmeticPage} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
