import Head from 'next/head';
import Navbar from '../components/Navbar';
import ProductList from '../components/ProductosList';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dociê</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/assets/css/styles.css" />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins" />
      </Head>
      <Navbar />
      <ProductList />
      <Footer />
      <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
      <script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      <script src="/assets/js/app.js"></script>
    </div>
  );
}


