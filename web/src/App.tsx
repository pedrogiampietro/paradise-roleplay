import { Routes, Route } from 'react-router-dom';
import { BarLoader } from 'react-spinners';
import { SidebarBag } from './components/SidebarBag';

import { Spinner } from './components/Spinner';
import { Home } from './pages/Home';

import { useFetchUser } from './hooks/useFetchUser';

function App() {
  const { user, loading, error } = useFetchUser();

  if (loading) return <Spinner children={<BarLoader color="white" />} />;

  return (
    <>
      {user && !error ? (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      )}
      <SidebarBag />
    </>
  );
}

export default App;
