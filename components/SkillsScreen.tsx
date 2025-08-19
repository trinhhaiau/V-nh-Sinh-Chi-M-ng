
import React from 'react';
import { Player, Skill } from '../types';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className="bg-black/30 border border-purple-500/30 rounded-lg p-5 flex flex-col gap-3 transition-all duration-300 hover:border-purple-400/80 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1">
      <div className="flex items-center gap-4">
        <div className="bg-purple-900/50 p-3 rounded-full border border-purple-500/50">
            <i className={`bx ${skill.icon} text-3xl text-purple-300`}></i>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{skill.name}</h3>
          <span className="text-sm font-semibold bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full">{skill.type}</span>
        </div>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed mt-2">
        {skill.description}
      </p>
    </div>
  );
};


interface SkillsScreenProps {
  player: Player;
}

const SkillsScreen: React.FC<SkillsScreenProps> = ({ player }) => {
  return (
    <div className="panel max-w-4xl mx-auto animate-fade-in">
      <h2 className="text-3xl font-bold text-purple-300 text-glow mb-6 text-center">Công Pháp & Kỹ Năng</h2>
      {player.skills.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {player.skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Bạn chưa học được kỹ năng nào.</p>
      )}
    </div>
  );
};

export default SkillsScreen;