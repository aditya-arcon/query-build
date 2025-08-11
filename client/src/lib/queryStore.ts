import { create } from 'zustand';

interface QueryState {
  sqlQuery: string;
  setSqlQuery: (query: string) => void;
  updateQuerySection: (section: string, content: string) => void;
}

export const useQueryStore = create<QueryState>((set, get) => ({
  sqlQuery: `SELECT
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
    s.quantity > 0`,
  
  setSqlQuery: (query: string) => set({ sqlQuery: query }),
  
  updateQuerySection: (section: string, content: string) => {
    const currentQuery = get().sqlQuery;
    // This could be expanded to intelligently update specific sections
    // For now, we'll replace the entire query
    set({ sqlQuery: content });
  },
}));