import { Check, X } from "lucide-react";

interface ComparisonTableProps {
  caption?: string;
  columns: string[];
  rows: { feature: string; values: (boolean | string)[] }[];
}

export default function ComparisonTable({ caption, columns, rows }: ComparisonTableProps) {
  return (
    <div className="comparison-scroll">
      <table>
        {caption && <caption>{caption}</caption>}
        <thead>
          <tr>
            <th scope="col">Features</th>
            {columns.map((column) => (
              <th key={column} scope="col">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.feature}>
              <th scope="row">{row.feature}</th>
              {row.values.map((value, index) => (
                <td key={columns[index]}>
                  {value === true ? (
                    <Check className="comparison-yes" aria-label="Included" />
                  ) : value === false ? (
                    <X className="comparison-no" aria-label="Not included" />
                  ) : (
                    value
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
