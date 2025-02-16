import {Toaster} from 'sonner';
import {Router} from './routes';

const App = () => {
  return (
    <>
      <Toaster position="top-right" richColors />
      <Router />
    </>
  );
};

export default App;
