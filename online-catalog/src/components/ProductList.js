const ProductList = () => {
  const products = [
    { id: 1, productName: "Camiseta esportiva", description: "A melhor Camiseta esportiva para suas atividades físicas.", price: "R$ 100,00", image: "https://placehold.co/300x200" },
    { id: 2, productName: "Tênis de basquete", description: "O incrível Tênis de basquete para melhorar seu desempenho nas quadras.", price: "R$ 200,00", image: "https://placehold.co/300x200" },
    { id: 3, productName: "Mochila de viagem", description: "A Mochila de viagem perfeita para suas aventuras.", price: "R$ 150,00", image: "https://placehold.co/300x200" },
    { id: 4, productName: "Relógio inteligente", description: "O Relógio inteligente que combina estilo e tecnologia.", price: "R$ 300,00", image: "https://placehold.co/300x200" },
    { id: 5, productName: "Fone de ouvido Bluetooth", description: "O Fone de ouvido Bluetooth com som de alta qualidade.", price: "R$ 250,00", image: "https://placehold.co/300x200" },
    { id: 6, productName: "Jaqueta corta-vento", description: "A Jaqueta corta-vento ideal para proteger você do frio.", price: "R$ 180,00", image: "https://placehold.co/300x200" },
    { id: 7, productName: "Garrafa térmica", description: "A Garrafa térmica que mantém sua bebida quente ou fria.", price: "R$ 80,00", image: "https://placehold.co/300x200" },
    { id: 8, productName: "Óculos de sol polarizado", description: "Os Óculos de sol polarizados que protegem seus olhos com estilo.", price: "R$ 120,00", image: "https://placehold.co/300x200" },
    { id: 9, productName: "Regata de basquete", description: "Camiseta leve e respirável, ideal para treinos e jogos.", price: "R$ 120,00", image: "https://placehold.co/300x200" },
    { id: 10, productName: "Munhequeira Esportiva", description: "Munhequeira de alta absorção de suor, ideal para treinos e jogos intensos.", price: "R$ 50,00", image: "https://placehold.co/300x200" },
  ];
  const [visibleProducts, setVisibleProducts] = useState(8); // Mostrar 8 produtos inicialmente (2 linhas de 4 colunas)

  const handleShowMore = () => {
    setVisibleProducts(products.length); // Mostrar todos os produtos
  };

  return (
    <div>
      <div className={styles.productList}>
        {products.slice(0, visibleProducts).map((product) => (
          <ProductCard
            key={product.id}
            name={product.productName}
            description={product.description}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
      {visibleProducts < products.length && (
        <button
          onClick={handleShowMore}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "1rem",
            color: "#fff",
            backgroundColor: "#0070f3",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.2s ease",
          }}
        >
          Ver Mais
        </button>
      )}
    </div>
  );
};

export default ProductList;
