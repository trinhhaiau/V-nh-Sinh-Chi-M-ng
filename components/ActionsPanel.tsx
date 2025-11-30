
import React from 'react';

interface ActionsPanelProps {
  onCultivate: () => void;
  onBreakthrough: () => void;
  onStartEncounter: () => void;
  isLoading: boolean;
  canBreakthrough: boolean;
  isBreakingThrough?: boolean;
}

const ActionsPanel: React.FC<ActionsPanelProps> = ({ 
  onCultivate, 
  onBreakthrough, 
  onStartEncounter, 
  isLoading, 
  canBreakthrough,
  isBreakingThrough = false
}) => {
  const actionsDisabled = isLoading;

  return (
    <div className="panel relative">
       <style>{`
        @keyframes breakthroughPulse {
          0% { box-shadow: 0 0 0 0 rgba(147, 51, 234, 0.7); background-color: #9333ea; border-color: #a855f7; }
          50% { box-shadow: 0 0 20px 10px rgba(234, 179, 8, 0.5); background-color: #eab308; border-color: #fef08a; transform: scale(1.02); }
          100% { box-shadow: 0 0 0 0 rgba(147, 51, 234, 0.7); background-color: #9333ea; border-color: #a855f7; }
        }
        .animate-breakthrough {
          animation: breakthroughPulse 0.5s infinite;
          color: white !important;
          opacity: 1 !important;
          cursor: wait !important;
        }
      `}</style>
      <h3 className="text-xl font-bold text-white mb-4 text-center">Hành Động</h3>
      <div className="flex flex-col gap-4">
        <button
          onClick={onCultivate}
          disabled={actionsDisabled}
          className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:from-purple-500 hover:to-indigo-500 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/30 disabled:opacity-50 disabled:cursor-wait disabled:bg-gray-600 disabled:from-gray-600 disabled:shadow-none"
        >
          {isLoading && !isBreakingThrough ? 'Đang Bận...' : 'Tĩnh Tọa (Tăng EXP)'}
        </button>
        <button
          onClick={onStartEncounter}
          disabled={actionsDisabled}
          className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:from-purple-500 hover:to-indigo-500 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/30 disabled:opacity-50 disabled:cursor-wait disabled:bg-gray-600 disabled:from-gray-600 disabled:shadow-none"
        >
          {isLoading && !isBreakingThrough ? 'Đang Bận...' : 'Khám Phá (Kỳ Ngộ)'}
        </button>
        <button
          onClick={onBreakthrough}
          disabled={!canBreakthrough || actionsDisabled}
          className={`w-full font-bold py-3 px-4 rounded-lg transition-all duration-300 shadow-lg 
            ${isBreakingThrough 
              ? 'animate-breakthrough border-2' 
              : 'bg-gradient-to-r from-green-600 to-teal-700 text-white hover:from-green-500 hover:to-teal-600 transform hover:scale-105 shadow-green-500/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-600 disabled:from-gray-600 disabled:shadow-none'
            }`}
        >
          {isBreakingThrough ? 'ĐANG ĐỘT PHÁ...' : (isLoading ? 'Đang Bận...' : 'Đột Phá Cảnh Giới!')}
        </button>
      </div>
    </div>
  );
};

export default ActionsPanel;
