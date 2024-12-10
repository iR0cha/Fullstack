
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Importar nuestros componentes
import ShowProducts from './Components/ShowProducts';
import CreateProduct from './Components/CreateProduct';
import EditProduct from './Components/EditProduct';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ShowProducts />} />
                    <Route path='/create' element={<CreateProduct />} />
                    <Route path='/edit/:id' element={<EditProduct />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App
