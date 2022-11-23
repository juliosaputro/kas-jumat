import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LoginMobile from './mobile/LoginMobile';
import HomeUser from './mobile/user/HomeUser';
import HomeAdmin from './mobile/admin/HomeAdmin';
import AssetAdmin from './mobile/admin/AssetAdmin';
import WargaAdmin from './mobile/admin/WargaAdmin';
import InfoAdmin from './mobile/admin/InfoAdmin';
import PemasukanUser from './mobile/user/PemasukanUser';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginMobile/>}/>
        <Route path='/Admin/Home' element={<HomeAdmin/>}/>
        <Route path='/Admin/Asset' element={<AssetAdmin/>}/>
        <Route path='/Admin/Warga' element={<WargaAdmin/>}/>
        <Route path='/Admin/Info' element={<InfoAdmin/>}/>
        <Route path='/User/Home' element={<HomeUser/>}/>
        <Route path='/User/Pemasukan' element={<PemasukanUser/>}/>
      </Routes>
    </Router>
  );
}

export default App;
