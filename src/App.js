import logo from './logo.svg';
import './App.css';
import Sidebar from './Component/Sidebar/Sidebar';
import Dashboard from './Component/DashBoard/Dashboard';
import { SidebarProvider } from './SidebarContext';

function App() {
  return (
<SidebarProvider>
  <div className="App">
    <Sidebar></Sidebar>
    <Dashboard/>
  </div>
</SidebarProvider>
    
  );
}

export default App;
