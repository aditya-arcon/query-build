import React from "react";
import { useQueryStore } from "@/lib/queryStore";

interface QueryEditorProps {
  className?: string;
}

export const QueryEditor: React.FC<QueryEditorProps> = ({ className }) => {
  const { sqlQuery } = useQueryStore();
  
  // Generate line numbers based on query content
  const lines = sqlQuery.split('\n');
  const lineNumbers = Array.from({ length: lines.length }, (_, i) => i + 1);

  // Function to render SQL with syntax highlighting
  const renderSQLWithHighlighting = (sql: string) => {
    const keywords = ['SELECT', 'FROM', 'WHERE', 'JOIN', 'ON', 'AND', 'OR', 'GROUP BY', 'ORDER BY', 'HAVING', 'DISTINCT', 'CASE', 'WHEN', 'THEN', 'ELSE', 'END', 'AS'];
    const functions = ['SUM', 'COUNT', 'AVG', 'MAX', 'MIN', 'UPPER', 'LOWER', 'TRIM', 'CONCAT'];
    const operators = ['>', '<', '=', '>=', '<=', '!=', '+', '-', '*', '/', '%'];

    let highlightedSQL = sql;
    
    // Highlight SQL keywords
    keywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
      highlightedSQL = highlightedSQL.replace(regex, `<span class="text-[#ff158a]">${keyword}</span>`);
    });

    // Highlight SQL functions
    functions.forEach(func => {
      const regex = new RegExp(`\\b${func}\\b`, 'gi');
      highlightedSQL = highlightedSQL.replace(regex, `<span class="text-[#0073ea]">${func}</span>`);
    });

    // Highlight operators
    operators.forEach(op => {
      const escapedOp = op.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`(\\s|^)(${escapedOp})(\\s|$)`, 'g');
      highlightedSQL = highlightedSQL.replace(regex, `$1<span class="text-[#0073ea]">${op}</span>$3`);
    });

    return highlightedSQL;
  };

  return (
    <div className={`flex-1 grow bg-[#f6f7fb] rounded overflow-hidden border border-solid border-[#d0d4e4] flex items-start relative self-stretch w-full ${className || ''}`}>
      <div className="flex flex-col w-10 items-center gap-0.5 px-2.5 py-3.5 relative bg-[#f6f7fb] border-r border-[#d0d4e4]" style={{ height: 'auto', minHeight: '585px' }}>
        {lineNumbers.map((num) => (
          <div
            key={`line-${num}`}
            className="relative w-fit [font-family:'Roboto',Helvetica] font-medium text-[#172b4d] text-[13px] tracking-[0] leading-[26px] whitespace-nowrap"
          >
            {num}
          </div>
        ))}
      </div>

      <div className="flex flex-col items-start relative flex-1 self-stretch grow bg-white">
        <div className="inline-flex flex-col items-start gap-2 p-4 relative flex-1 grow w-full">
          <div 
            className="relative w-full [font-family:'Roboto',Helvetica] font-medium text-[13px] tracking-[0] leading-[25px]"
            dangerouslySetInnerHTML={{
              __html: renderSQLWithHighlighting(sqlQuery).replace(/\n/g, '<br />')
            }}
          />
        </div>
      </div>
    </div>
  );
};