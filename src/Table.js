import "./Table.css";

export function Table({ children }) {
  return (
    <table className="table">
      <tbody>{children}</tbody>
    </table>
  );
}
