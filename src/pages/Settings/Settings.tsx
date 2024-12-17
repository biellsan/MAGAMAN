import React from 'react';
import { Outlet } from 'react-router-dom';
import { SettingsTabs } from './components/SettingsTabs';

export const Settings: React.FC = () => {
    return (
        <div className="flex h-screen">
            {/* Menu de Navegação */}
            <aside className="w-64 bg-white border-r border-gray-200 h-full">
                <SettingsTabs />
            </aside>

            {/* Conteúdo */}
            <div className="flex-1 p-8 overflow-auto">
                <Outlet />
            </div>
        </div>
    );
};
