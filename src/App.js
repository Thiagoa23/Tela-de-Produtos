
import './App.css';
import Description from './components/Description';
import Products from './components/Products';

const products = [
  {
  "id": 1,
  "title": "Camisa de Manga Longa Espaço Celestial",
  "description": "Esta camisa de manga longa apresenta uma estampa impressionante com um tema astronômico que captura o olhar de qualquer entusiasta do espaço. O design inclui uma representação detalhada de um corpo celeste cercado por uma nebulosa e estrelas em tons de preto, branco e cinza.",
  "imageUrl": "https://th.bing.com/th/id/OIG4.QsdN2DIljbisWblLoeb0?pid=ImgGn"
  },
  {
  "id": 2,
  "title": "Jaqueta de Couro Vintage",
  "description": "Jaqueta de couro genuíno com acabamento vintage, perfeita para adicionar um toque de estilo retrô ao seu guarda-roupa. Possui bolsos funcionais e um forro confortável.",
  "imageUrl": "https://th.bing.com/th/id/OIG3.cP7peoriAIyyGG9fQF92?pid=ImgGn"
  },
  {
  "id": 3,
  "title": "Óculos de Sol Clássicos",
  "description": "Óculos de sol com armação clássica e lentes polarizadas, oferecendo proteção UV. Perfeito para proteger seus olhos com estilo.",
  "imageUrl": "https://th.bing.com/th/id/OIG2.HrHMbE1CFWTRbrzwxlOh?w=1024&h=1024&rs=1&pid=ImgDetMain"
  },
  {
  "id": 4,
  "title": "Relógio de Pulso Elegante",
  "description": "Relógio de pulso com design sofisticado, pulseira de couro e mostrador analógico. Ideal para ocasiões formais e uso diário.",
  "imageUrl": "https://th.bing.com/th/id/OIG2.DcFq5GN4J4B6HGTlAm4c?w=1024&h=1024&rs=1&pid=ImgDetMain"
  },
  {
  "id": 5,
  "title": "Tênis Casual Branco",
  "description": " Tênis casual na cor branca com design moderno e solado antiderrapante. Confortável para uso diário e atividades leves.",
  "imageUrl": "https://th.bing.com/th/id/OIG1.1ZvNlL0pjQsA2mipjrI7?w=1024&h=1024&rs=1&pid=ImgDetMain"
  },
  {
  "id": 6,
  "title": "Bermuda de Sarja",
  "description": "Bermuda de sarja na cor bege com corte reto e bolsos funcionais. Perfeita para os dias quentes e momentos de lazer.",
  "imageUrl": "https://th.bing.com/th/id/OIG2.WTD.vxev4cYX3aH10xum?w=1024&h=1024&rs=1&pid=ImgDetMain"
  },
  {
  "id": 7,
  "title": "Cinto de Couro Preto",
  "description": "Cinto de couro na cor preta com fivela metálica. Ideal para complementar qualquer look casual ou formal.",
  "imageUrl": "https://th.bing.com/th/id/OIG3.zaehk4mZ.eKiy.UYJuyy?w=1024&h=1024&rs=1&pid=ImgDetMain"
  },
  {
  "id": 8,
  "title": "Mochila Executiva",
  "description": "Mochila executiva na cor cinza com compartimentos espaçosos e alças ajustáveis. Perfeita para o dia a dia e pequenas viagens.",
  "imageUrl": "https://th.bing.com/th/id/OIG4.GaVORm9CXg5bRB5.zSaZ?w=1024&h=1024&rs=1&pid=ImgDetMain"
  },
  {
  "id": 9,
  "title": "Calça Jeans Slim Fit",
  "description": " Calça jeans slim fit na cor azul escuro com elastano para maior conforto. Ideal para um look casual e moderno.",
  "imageUrl": "https://th.bing.com/th/id/OIG2.IjMBa370auj72C3xdwdl?w=1024&h=1024&rs=1&pid=ImgDetMain"
  },
  {
  "id": 10,
  "title": "Chapéu Fedora Cinza",
  "description": "Chapéu fedora na cor cinza feito de feltro de alta qualidade, com fita decorativa. Ideal para adicionar um toque de elegância ao seu visual.",
  "imageUrl": "https://th.bing.com/th/id/OIG4.t3.8SO5woUGGLpP_oBEQ?w=1024&h=1024&rs=1&pid=ImgDetMain"
  },
  {
  "id": 11,
  "title": "Jaqueta Jeans",
  "description": "Jaqueta jeans na cor azul claro com detalhes desfiados. Perfeita para um look casual e despojado.",
  "imageUrl": "https://th.bing.com/th/id/OIG3.XqFPRsy8eIJmWQz7TqLB?w=1024&h=1024&rs=1&pid=ImgDetMain"
  },
  {
  "id": 12,
  "title": " Blazer de Linho",
  "description": "Blazer de linho com corte moderno e forro interno. Ideal para eventos formais e para um look sofisticado.",
  "imageUrl": "https://th.bing.com/th/id/OIG2.ZT25_SBjiX8tfvDdjxmx?w=1024&h=1024&rs=1&pid=ImgDetMain"
  },
  {
  "id": 13,
  "title": "Jaqueta Parka Verde",
  "description": "Jaqueta parka na cor verde, com capuz removível e vários bolsos. Ideal para dias frios e chuvosos, combinando estilo e funcionalidade.",
  "imageUrl": "https://th.bing.com/th/id/OIG4.mV52EXY5.EBCI96oC24B?w=1024&h=1024&rs=1&pid=ImgDetMain"
  },
  {
  "id": 14,
  "title": "Boné Trucker",
  "description": "Boné estilo trucker na cor preta, com tela traseira para ventilação e ajuste snapback. Perfeito para um look casual e esportivo.",
  "imageUrl": "https://th.bing.com/th/id/OIG1.JTOyaPX40WM8HauaKXos?w=1024&h=1024&rs=1&pid=ImgDetMain"
  },
  {
  "id": 15,
  "title": " Relógio de Pulso Minimalista",
  "description": " Relógio de pulso com design minimalista, pulseira prateada e mostrador analógico. Ideal para um look elegante e moderno.",
  "imageUrl": "https://th.bing.com/th/id/OIG4.LcbZBU21KWKzOrNsayHj?w=1024&h=1024&rs=1&pid=ImgDetMain"
  },
  {
  "id": 16,
  "title": "Carteira de Couro",
  "description": "Carteira de couro na cor marrom, com vários compartimentos para cartões e dinheiro. Elegante e prática para o dia a dia.",
  "imageUrl": "https://th.bing.com/th/id/OIG4.kty02MmyOCtfBTFi0vAP?w=1024&h=1024&rs=1&pid=ImgDetMain"
  },
  {
  "id": 17,
  "title": "Jaqueta Corta-Vento",
  "description": "jaqueta corta-vento disponível em diversas cores vibrantes, perfeita para qualquer ocasião. Com capuz ajustável e design moderno, ela oferece proteção contra o vento e estilo em qualquer clima. Ideal para quem busca conforto e praticidade sem abrir mão da moda.",
  "imageUrl": "https://th.bing.com/th/id/OIG2.zjZPU25KVHlFvJ6w0pl3?w=1024&h=1024&rs=1&pid=ImgDetMain"
  },
  {
    "id": 18,
    "title": "Corrente Lobo Prateado",
    "description": "corrente feita de prata fina,  apresenta um pingente com o símbolo de um lobo. O design do lobo é detalhado e elegante, transmitindo uma sensação de força e liberdade. Ideal para quem aprecia acessórios com um toque de natureza e simbolismo.",
    "imageUrl": "https://th.bing.com/th/id/OIG4.5Slm88en2zeOMdhxI7Ie?w=1024&h=1024&rs=1&pid=ImgDetMain"
  },
  {
    "id": 19,
    "title": "VisionSquare Elegance",
    "description": "Os óculos VisionSquare Elegance são a combinação perfeita de estilo e funcionalidade. Com uma armação quadrada e linhas limpas, eles oferecem um visual moderno e sofisticado. A armação é feita de um material leve e durável, garantindo conforto durante todo o dia. As lentes de alta qualidade proporcionam uma visão clara e nítida, enquanto o design elegante se adapta a qualquer ocasião, seja no trabalho ou em momentos de lazer. Disponíveis em várias cores, os VisionSquare Elegance são a escolha ideal para quem busca um acessório de moda que também cuide da saúde dos olhos.",
    "imageUrl": "https://th.bing.com/th/id/OIG4.w6iM_EREX8iLNMHoOaeY?w=1024&h=1024&rs=1&pid=ImgDetMain"
  },
  {
  "id": 20,
  "title": "Tênis Dynamic Style",
  "description": "Um par de tênis moderno e arrojado, combinando as cores azul, preto e branco. Ideal para quem busca estilo e conforto.",
  "imageUrl": "https://th.bing.com/th/id/OIG1.NTyWb3rZ1R7G9WlRFAxc?pid=ImgGn"
  },
]

function App() {
  return (
    <div className="App">
      <h1>Modern Style</h1>
      <Description>Confira nossos produtos abaixo</Description>
      <Products products={products}/>
    </div>
  );
}

export default App;
