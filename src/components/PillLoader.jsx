import React from 'react';

const PillLoader = ({ text = "Loading AI help for you" }) => {
  return (
    <div className="fixed inset-0 bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="h-40">
          <div className="pill-bounce">
            <div className="pill-flop origin-center">
              <div 
                className="inline-block w-20 h-8 rounded-full border border-green-500 pill-gradient shadow-lg shadow-green-500/50"
              ></div>
            </div>
          </div>
        </div>
        
        <div className="block text-center">
          <div 
            className="inline-block w-[70px] h-[7px] rounded-full bg-green-500 bg-opacity-40 pill-shadow shadow-sm shadow-green-500/30"
          ></div>
        </div>
        
        <div className="font-bold text-green-400 uppercase mt-6 text-sm tracking-wide text-center max-w-xs">
          {text}
        </div>
      </div>
    </div>
  );
};

export default PillLoader;