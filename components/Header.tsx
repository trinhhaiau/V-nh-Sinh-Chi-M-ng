
import React from 'react';

type Tab = 'character' | 'skills' | 'inventory' | 'map' | 'more';

interface NavItemProps {
  icon: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-300 ${isActive ? 'bg-purple-500/20 text-white border-b-2 border-purple-400' : 'text-gray-400 hover:bg-white/10 hover:text-white'}`}
    aria-pressed={isActive}
  >
    <i className={`bx ${icon} text-xl`}></i>
    <span className="hidden sm:inline">{label}</span>
  </button>
);

interface HeaderProps {
    activeTab: Tab;
    onTabChange: (tab: Tab) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, onTabChange }) => {
  return (
    <header className="flex flex-col items-center gap-6">
      <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wider text-glow" style={{ fontFamily: "'Noto Serif', serif" }}>
        Tu Tiên Giả Lập Ký
      </h1>
      <nav className="panel flex items-center justify-center gap-2 md:gap-4 p-2 w-full max-w-lg">
        <NavItem icon="bxs-user-circle" label="Nhân Vật" isActive={activeTab === 'character'} onClick={() => onTabChange('character')} />
        <NavItem icon="bxs-magic-wand" label="Kỹ Năng" isActive={activeTab === 'skills'} onClick={() => onTabChange('skills')} />
        <NavItem icon="bxs-shopping-bag" label="Túi Đồ" isActive={activeTab === 'inventory'} onClick={() => onTabChange('inventory')} />
        <NavItem icon="bxs-map" label="Bản Đồ" isActive={activeTab === 'map'} onClick={() => onTabChange('map')} />
        <NavItem icon="bxs-grid-alt" label="Mở Rộng" isActive={activeTab === 'more'} onClick={() => onTabChange('more')} />
      </nav>
    </header>
  );
};

export default Header;