import React from 'react';
import { Navbar } from './components/header/navbar';
import { ProductList } from './pages/product/productList';
import { Footer } from './components/footer/footer';
import { Sidebar } from './components/sidebar/sidebar';

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Sidebar />
      <ProductList />
      <Footer />
    </React.Fragment>
  );
}
export default App;
