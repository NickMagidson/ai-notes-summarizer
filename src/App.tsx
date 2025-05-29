import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SummaryDisplay from './components/SummaryDisplay';
import { Button, Textarea } from '@headlessui/react';
import LoadingSpinner from './components/LoadingSpinner';
import { mockSummaries } from './mockData'; 


const App: React.FC = () => {
  const [notes, setNotes] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  const handleSummarize = () => {
    setLoading(true);
    setSummary('');
    setShowSummary(false);

    // In a real application, you would replace this with an actual API call
    setTimeout(() => {
      const randomSummary = mockSummaries[Math.floor(Math.random() * mockSummaries.length)];
      setSummary(randomSummary);
      setLoading(false);
      setShowSummary(true);
    }, 1500);
  };

  const handleClear = () => {
    setNotes('');
    setSummary('');
    setShowSummary(false);
  };

  return (
    <>
      <Navbar />
      <main className="w-screen min-h-screen overflow-auto bg-gray-900 text-white transition-colors">
        <div className="max-w-screen-md mx-auto px-4 py-8 mt-12">
          <h1 className="text-center text-3xl font-bold mb-6">Welcome</h1>
          <div className="flex flex-col w-full">
            <Textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Paste your meeting notes here..."
              className="w-full p-4 border border-gray-700 bg-gray-800 text-white rounded-md mb-4 h-40 resize-none"
            />

            <div className="flex gap-4 items-center justify-end">
              <Button
                className="inline-flex items-center gap-2
                  rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white 
                  shadow-inner shadow-white/10 
                  focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white 
                  data-hover:bg-gray-600 data-open:bg-gray-700"
                onClick={handleSummarize}
                disabled={loading || !notes.trim()}
              >
                {loading ? (
                  <LoadingSpinner label="Summarizing..." />
                ) : (
                  'Summarize'
                )}
              </Button>

              {showSummary && (
                <Button
                  onClick={handleClear}
                  className="inline-flex items-center gap-2
                    rounded-md bg-red-600 hover:bg-red-700 px-3 py-1.5 text-sm/6 font-semibold text-white 
                    shadow-inner shadow-white/10 
                    focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white"
                >
                  Clear Notes
                </Button>
              )}
            </div>
          </div>

          <SummaryDisplay summary={summary} show={showSummary} />
        </div>
      </main>
    </>
  );
};

export default App;
