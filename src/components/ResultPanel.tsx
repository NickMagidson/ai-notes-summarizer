type ResultPanelProps = {
  summary: string;
};

export const ResultPanel: React.FC<ResultPanelProps> = ({ summary }) => (
  <div className="mt-6">
    <h2 className="text-lg font-semibold mb-2">Summary</h2>
    <p>{summary}</p>
  </div>
);