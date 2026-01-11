import React from 'react';
import { 
  MapPin, 
  Smartphone, 
  Camera, 
  Video, 
  Globe, 
  Share2, 
  Layout, 
  ScanLine 
} from 'lucide-react';
import { ServiceCategory } from './types';

export const SERVICE_DATA: ServiceCategory[] = [
  {
    id: 'tech',
    title: 'Tecnologia de Aproximação',
    description: 'Ferramentas físicas inteligentes para conectar o mundo real ao digital instantaneamente.',
    items: [
      {
        id: 'placa-google',
        title: 'Placas Inteligentes Google',
        subtitle: 'Avaliação Instantânea',
        description: 'Aumente suas avaliações no Google Maps facilitando o acesso do cliente via QR Code e tecnologia NFC.',
        color: 'blue',
        icon: <MapPin className="w-6 h-6" />,
        image: 'https://picsum.photos/400/300?random=1',
        pricing: [
          { title: 'Placa QR Code (PVC)', price: 'R$ 40,00', description: 'Simples e eficiente.' },
          { title: 'Display em L (QR Code)', price: 'R$ 40,00', description: 'Ideal para balcões (9x15cm).' },
          { title: 'Display em L (QR Code + NFC)', price: 'R$ 70,00', description: 'Aproximação e leitura óptica.' },
          { title: 'Placa Personalizada (NFC + Redes)', price: 'R$ 120,00', description: 'Design exclusivo com sua marca.', highlight: true },
        ]
      },
      {
        id: 'cartao-visita',
        title: 'Networking Digital',
        subtitle: 'Cartões & Links',
        description: 'Modernize sua apresentação profissional com cartões infinitos e links centralizados.',
        color: 'red',
        icon: <Smartphone className="w-6 h-6" />,
        pricing: [
          { title: 'Cartão de Visita NFC', price: 'R$ 60,00', description: 'Compartilhe contato por aproximação.' },
          { title: 'Encurtador de Link (Beacons)', price: 'R$ 100,00', description: 'Árvore de links inteligente para Bio.' },
        ]
      }
    ]
  },
  {
    id: 'gmb',
    title: 'Google Meu Negócio',
    description: 'Domine o topo das pesquisas locais e transmita credibilidade.',
    items: [
      {
        id: 'perfil-gmb',
        title: 'Criação e Otimização de Perfil',
        subtitle: 'Setup Profissional',
        description: 'Configuração completa do seu perfil para garantir máxima visibilidade nas buscas locais.',
        color: 'green',
        icon: <Globe className="w-6 h-6" />,
        pricing: [
          { title: 'Perfil + SEO Local Inicial', price: 'R$ 700,00', description: 'Criação e estruturação completa.' },
          { title: 'Otimização Técnica', price: 'R$ 600,00', description: 'Taxa única para perfis já existentes.' },
          { title: 'Otimização Premium', price: 'R$ 1.000,00', description: 'SEO + Fotos + Copywriting estratégico.', highlight: true },
        ]
      },
      {
        id: 'fotos-gmb',
        title: 'Fotografia Profissional',
        subtitle: 'Imagens que Vendem',
        description: 'Fotos de alta qualidade da fachada, interior e produtos para encantar clientes antes da visita.',
        color: 'yellow',
        icon: <Camera className="w-6 h-6" />,
        image: 'https://picsum.photos/400/300?random=2',
        pricing: [
          { title: 'Ensaio Rápido', price: 'R$ 150,00', description: 'Até 5 fotos tratadas.' },
          { title: 'Pacote Intermediário', price: 'R$ 500,00', description: '20 fotos em alta resolução (Fachada/Interior).' },
        ]
      },
      {
        id: 'tour-360',
        title: 'Tour Virtual 360°',
        subtitle: 'Imersão Total',
        description: 'Permita que seu cliente visite seu estabelecimento virtualmente com tecnologia Street View.',
        color: 'blue',
        icon: <ScanLine className="w-6 h-6" />,
        image: 'https://picsum.photos/400/300?random=3',
        pricing: [
          { title: 'Foto 360° Simples', price: 'R$ 70,00', description: 'Ponto único.' },
          { title: 'Sessão 360° Completa', price: 'R$ 600,00', description: 'Tour completo do estabelecimento.', highlight: true },
        ]
      }
    ]
  },
  {
    id: 'social',
    title: 'Social Media & Branding',
    description: 'Construção de marca e engajamento contínuo nas redes.',
    items: [
      {
        id: 'gestao-insta',
        title: 'Gestão de Instagram',
        subtitle: 'Crescimento Constante',
        description: 'Administração profissional do seu perfil para gerar autoridade e vendas.',
        color: 'red',
        icon: <Share2 className="w-6 h-6" />,
        pricing: [
          { title: 'Pacote Start', price: 'R$ 450,00/mês', description: '2 posts semanais.' },
          { title: 'Intermediário', price: 'R$ 800,00/mês', description: '3 posts/semana + Interação básica.' },
          { title: 'Profissional', price: 'R$ 1.200,00/mês', description: '5 posts/semana + Stories diários.', highlight: true },
        ]
      },
      {
        id: 'video-prod',
        title: 'Produção Audiovisual',
        subtitle: 'Reels e Shorts',
        description: 'Vídeos dinâmicos para capturar a atenção nas redes sociais.',
        color: 'yellow',
        icon: <Video className="w-6 h-6" />,
        image: 'https://picsum.photos/400/300?random=4',
        pricing: [
          { title: 'Combo Fotos + Vídeo', price: 'R$ 450,00', description: '10 fotos + 1 vídeo institucional.' },
          { title: 'Pacote Reels Maker', price: 'R$ 800,00/mês', description: 'Roteiro + Edição de 8 vídeos mensais.' },
        ]
      },
      {
        id: 'branding',
        title: 'Identidade Visual',
        subtitle: 'Design de Marca',
        description: 'Criação de logotipos e materiais gráficos que transmitem profissionalismo.',
        color: 'green',
        icon: <Layout className="w-6 h-6" />,
        pricing: [
          { title: 'Kit Básico', price: 'R$ 500,00', description: 'Logo simples.' },
          { title: 'Identidade Completa', price: 'R$ 1.500,00', description: 'Logo + Paleta + Tipografia + Aplicações.', highlight: true },
        ]
      }
    ]
  }
];