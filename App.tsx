
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './pages/Dashboard';
import { Inventory } from './pages/Inventory';
import { Purchases } from './pages/Purchases';
import { Production } from './pages/Production';
import { Sales } from './pages/Sales';
import { Invoices } from './pages/Invoices';
import { Settings } from './pages/Settings';
import { Partners } from './pages/Partners';
import { Expenses } from './pages/Expenses';
import { Staff } from './pages/Staff';
import { ThemeProvider } from './contexts/ThemeContext';
import { DataProvider } from './contexts/DataContext';

const AppContent = () => {
  return (
    <div className="flex w-screen h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Sidebar />
      <main className="flex-1 h-screen overflow-hidden">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/purchases" element={<Purchases />} />
            <Route path="/production" element={<Production />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <DataProvider>
        <HashRouter>
          <AppContent />
        </HashRouter>
      </DataProvider>
    </ThemeProvider>
  );
};

export default App;