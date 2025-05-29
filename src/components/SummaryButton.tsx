type SummaryButtonProps = {
  onClick: () => void;
  disabled: boolean;
};

export const SummaryButton: React.FC<SummaryButtonProps> = ({ onClick, disabled }) => (
  <button
    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4 disabled:opacity-50"
    onClick={onClick}
    disabled={disabled}
  >
    Summarize
  </button>
);