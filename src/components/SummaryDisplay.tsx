import { Transition } from '@headlessui/react';

interface SummaryDisplayProps {
  summary: string;
  show: boolean;
}

const SummaryDisplay: React.FC<SummaryDisplayProps> = ({ summary, show }) => {
  return (
    <Transition
      show={show}
      enter="transition-opacity duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="mt-6 p-4 border border-gray-300 rounded-md">
        <h2 className="font-semibold mb-2">Summary:</h2>
        <p>{summary}</p>
      </div>
    </Transition>
  );
};

export default SummaryDisplay;
