import React from 'react';

export const GeneralSettings: React.FC = () => {
    return (
        <div className="flex flex-col w-full h-full">
            {/* Informações Gerais */}
            <div className="bg-white p-6 rounded-lg shadow mb-6">
                <h2 className="text-xl font-semibold mb-1">Informações Gerais</h2>
                <p className="text-gray-500 text-sm mb-6">Configurações básicas da loja e informações</p>
                
                <div className="space-y-6">
                    <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">Nome da Loja</label>
                        <input 
                            type="text" 
                            className="w-full border border-gray-300 rounded-md px-3 py-2"
                            defaultValue="Minha Loja"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">Fuso Horário</label>
                        <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                            <option>Brasília (GMT-03:00)</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">Moeda</label>
                        <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                            <option>Real Brasileiro (BRL)</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Detalhes da Loja */}
            <div className="bg-white p-6 rounded-lg shadow mb-6">
                <h2 className="text-xl font-semibold mb-1">Detalhes da Loja</h2>
                <p className="text-gray-500 text-sm mb-6">Endereço e informações de contato da loja</p>
                
                <div className="space-y-6">
                    <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">Endereço da Loja</label>
                        <textarea 
                            className="w-full border border-gray-300 rounded-md px-3 py-2"
                            rows={3}
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">Número de Telefone</label>
                        <input 
                            type="tel" 
                            className="w-full border border-gray-300 rounded-md px-3 py-2"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">E-mail de Contato</label>
                        <input 
                            type="email" 
                            className="w-full border border-gray-300 rounded-md px-3 py-2"
                        />
                    </div>
                </div>
            </div>

            {/* Configurações de Pedidos */}
            <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-1">Configurações de Pedidos</h2>
                <p className="text-gray-500 text-sm mb-6">Configure como os pedidos serão tratados</p>
                
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">Prefixo do Número do Pedido</label>
                        <input 
                            type="text" 
                            defaultValue="#"
                            className="w-full border border-gray-300 rounded-md px-3 py-2"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">Sufixo do Número do Pedido</label>
                        <input 
                            type="text" 
                            className="w-full border border-gray-300 rounded-md px-3 py-2"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
