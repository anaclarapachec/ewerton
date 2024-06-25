import Image from 'next/image';

const products = [
  { src: "/produto-1.png", name: "BOLO BRUNA", price: "R$140,00" },
  { src: "/produto-2.png", name: "BOLO CROCANTE", price: "R$80,00" },
  { src: "/produto-3.png", name: "BOLO DE LEITE EM PÓ", price: "R$90,00" },
  { src: "/produto-4.png", name: "BOLO DE MORANGO", price: "R$100,00" },
  { src: "/produto-5.png", name: "BOLO BRUNA", price: "R$150,00" },
  { src: "/produto-6.png", name: "BOLO NINHO", price: "R$60,00" },
  { src: "/produto-7.png", name: "PAVÊ DE NINHO", price: "R$85,00" },
  { src: "/produto-8.png", name: "TORTA DE NOZES", price: "R$96,00" },
];

const ProductList = () => (
  <div className="corpo-categorias">
    <div className="linha linha2">
      <h2>PRODUTOS</h2>
      <select name="categories" id="categories">
        <option value="bolos">BOLOS</option>
        <option value="travessas">TRAVESSAS</option>
        <option value="docinhos-gourmet">DOCINHOS GOURMET</option>
        <option value="tortas">TORTAS</option>
      </select>
    </div>
    <div className="linha">
      {products.map((product, index) => (
        <div key={index} className="col-4">
          <Image src={product.src} alt={product.name} width={200} height={200} />
          <h4>{product.name}</h4>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
    <div className="paginacao">
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>&#8594;</span>
    </div>
  </div>
);

export default ProductList;