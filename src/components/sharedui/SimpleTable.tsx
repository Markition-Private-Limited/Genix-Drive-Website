import SubHeading from "./SubHeading";

interface Column {
  title: string;
  align?: "left" | "center" | "right";
  width?: string | number;
}

interface SimpleTableProps {
  title?: string;
  columns: Column[];
  rows: React.ReactNode[][];
  footer?: React.ReactNode;
}

const alignClass = (a?: Column["align"]) =>
  a === "center" ? "text-center" : a === "right" ? "text-right" : "text-left";

const SimpleTable = ({ title, columns, rows, footer }: SimpleTableProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm ring-1 ring-black/5 p-5">
      {title && (
        <SubHeading size="lg" weight="bold" className="mb-4">
          {title}
        </SubHeading>
      )}
      <div className="rounded-xl ring-1 ring-black/5 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 text-gray-600 text-xs font-semibold">
            <tr>
              {columns.map((c, i) => (
                <th
                  key={i}
                  className={`px-4 py-3 ${alignClass(c.align)}`}
                  style={c.width ? { width: c.width } : undefined}
                >
                  {c.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-sm">
            {rows.map((r, ri) => (
              <tr key={ri} className="border-t border-gray-100">
                {r.map((cell, ci) => (
                  <td
                    key={ci}
                    className={`px-4 py-3 ${alignClass(columns[ci]?.align)}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {footer && <div className="mt-4">{footer}</div>}
    </div>
  );
};

export default SimpleTable;
