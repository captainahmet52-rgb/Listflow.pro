import { Category } from '@/types'

export const CATEGORIES: Category[] = [
  {
    id: 'tig-isi',
    slug: 'tig-isi',
    name: 'Tığ İşi',
    icon: '🧶',
    products: [
      {
        name: 'Anahtarlık',
        cost: 8, shipping: 10, etsy_fee: 8.4, sale_price: 35, net_profit: 8.6, margin: 25,
        image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=200&fit=crop&q=80',
      },
      {
        name: 'Amigurumi',
        cost: 15, shipping: 10, etsy_fee: 13.2, sale_price: 55, net_profit: 16.8, margin: 31,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=200&fit=crop&q=80',
      },
      {
        name: 'Dönence',
        cost: 35, shipping: 10, etsy_fee: 22.8, sale_price: 95, net_profit: 27.2, margin: 29,
        image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=400&h=200&fit=crop&q=80',
      },
      {
        name: 'Kapı Süsü',
        cost: 45, shipping: 10, etsy_fee: 28.8, sale_price: 120, net_profit: 36.2, margin: 30,
        image: 'https://images.unsplash.com/photo-1512418490979-92798cec1a8e?w=400&h=200&fit=crop&q=80',
      },
      {
        name: 'Çiçek Buketi',
        cost: 8, shipping: 10, etsy_fee: 8.4, sale_price: 35, net_profit: 8.6, margin: 25,
        image: 'https://images.unsplash.com/photo-1490750967868-88df5691a1a2?w=400&h=200&fit=crop&q=80',
      },
    ],
  },
  {
    id: 'punch-needle',
    slug: 'punch-needle',
    name: 'Punch Needle',
    icon: '🪡',
    products: [
      {
        name: '4\'lü Bardak Altlığı',
        cost: 12, shipping: 10, etsy_fee: 10.8, sale_price: 45, net_profit: 12.2, margin: 27,
        image: 'https://images.unsplash.com/photo-1563728580786-ec3b1a62b0cc?w=400&h=200&fit=crop&q=80',
      },
      {
        name: 'Punch Tablo',
        cost: 25, shipping: 10, etsy_fee: 18.0, sale_price: 75, net_profit: 22.0, margin: 29,
        image: 'https://images.unsplash.com/photo-1575023782549-62ca0d244b39?w=400&h=200&fit=crop&q=80',
      },
      {
        name: '4\'lü Anahtarlık',
        cost: 10, shipping: 10, etsy_fee: 9.1, sale_price: 38, net_profit: 8.9, margin: 23,
        image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=200&fit=crop&q=80',
      },
      {
        name: 'Mousepad Set',
        cost: 30, shipping: 10, etsy_fee: 17.4, sale_price: 72, net_profit: 14.6, margin: 20,
        image: 'https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=400&h=200&fit=crop&q=80',
      },
    ],
  },
  {
    id: '3d-baski',
    slug: '3d-baski',
    name: '3D Baskı',
    icon: '🖨️',
    products: [
      {
        name: 'Anahtarlık',
        cost: 5, shipping: 10, etsy_fee: 6.7, sale_price: 28, net_profit: 6.3, margin: 22,
        image: 'https://images.unsplash.com/photo-1631700611307-37dbcb89ef7e?w=400&h=200&fit=crop&q=80',
      },
      {
        name: 'Figür',
        cost: 18, shipping: 10, etsy_fee: 12.5, sale_price: 52, net_profit: 11.5, margin: 22,
        image: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=400&h=200&fit=crop&q=80',
      },
      {
        name: '3D Tablo',
        cost: 28, shipping: 10, etsy_fee: 20.4, sale_price: 85, net_profit: 26.6, margin: 31,
        image: 'https://images.unsplash.com/photo-1562259929-b44a8668d674?w=400&h=200&fit=crop&q=80',
      },
      {
        name: '3D Kalemlik',
        cost: 28, shipping: 10, etsy_fee: 20.4, sale_price: 85, net_profit: 26.6, margin: 31,
        image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=200&fit=crop&q=80',
      },
    ],
  },
  {
    id: 'pod',
    slug: 'pod',
    name: 'POD (Print On Demand)',
    icon: '👕',
    products: [
      {
        name: 'Tişört (S-XL Beden)',
        cost: 14, shipping: 10, etsy_fee: 8.4, sale_price: 35, net_profit: 2.6, margin: 7,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=200&fit=crop&q=80',
      },
      {
        name: 'Canvas Tablo',
        cost: 22, shipping: 10, etsy_fee: 15.6, sale_price: 65, net_profit: 17.4, margin: 27,
        image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=200&fit=crop&q=80',
      },
      {
        name: 'Pin/Rozet',
        cost: 3, shipping: 10, etsy_fee: 3.1, sale_price: 13, net_profit: -3.1, margin: -24,
        image: 'https://images.unsplash.com/photo-1558618086-ffd3d3f7e6d9?w=400&h=200&fit=crop&q=80',
      },
    ],
  },
  {
    id: 'gumus-taki',
    slug: 'gumus-taki',
    name: 'Gümüş Takı',
    icon: '💍',
    products: [
      {
        name: 'Kolye',
        cost: 25, shipping: 10, etsy_fee: 18.0, sale_price: 75, net_profit: 22.0, margin: 29,
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=200&fit=crop&q=80',
      },
      {
        name: 'Yüzük',
        cost: 20, shipping: 10, etsy_fee: 15.6, sale_price: 65, net_profit: 19.4, margin: 30,
        image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=200&fit=crop&q=80',
      },
      {
        name: 'Bilezik',
        cost: 30, shipping: 10, etsy_fee: 20.4, sale_price: 85, net_profit: 24.6, margin: 29,
        image: 'https://images.unsplash.com/photo-1573408301185-9519f94f6f1b?w=400&h=200&fit=crop&q=80',
      },
    ],
  },
  {
    id: 'cam-baski',
    slug: 'cam-baski',
    name: 'Cam Baskı',
    icon: '🪟',
    products: [
      {
        name: 'Cam Saat (26cm)',
        cost: 15, shipping: 10, etsy_fee: 13.2, sale_price: 55, net_profit: 16.8, margin: 31,
        image: 'https://images.unsplash.com/photo-1584208632869-05fa2b2a5934?w=400&h=200&fit=crop&q=80',
      },
      {
        name: 'Cam Tablo (Orta Boy)',
        cost: 22, shipping: 10, etsy_fee: 16.3, sale_price: 68, net_profit: 19.7, margin: 29,
        image: 'https://images.unsplash.com/photo-1559682468-456c2f4fd2b6?w=400&h=200&fit=crop&q=80',
      },
      {
        name: 'Cam Kesme Tahtası',
        cost: 22, shipping: 10, etsy_fee: 16.3, sale_price: 68, net_profit: 19.7, margin: 29,
        image: 'https://images.unsplash.com/photo-1584466977773-e625c37cdd50?w=400&h=200&fit=crop&q=80',
      },
    ],
  },
  {
    id: 'metal-kesim',
    slug: 'metal-kesim',
    name: 'Metal Kesim',
    icon: '⚙️',
    products: [
      {
        name: 'Masa Saati',
        cost: 35, shipping: 10, etsy_fee: 22.8, sale_price: 95, net_profit: 27.2, margin: 29,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop&q=80',
      },
      {
        name: 'Metal Tablo',
        cost: 45, shipping: 10, etsy_fee: 32.4, sale_price: 135, net_profit: 47.6, margin: 35,
        image: 'https://images.unsplash.com/photo-1560732488-6b0df240254a?w=400&h=200&fit=crop&q=80',
      },
    ],
  },
  {
    id: 'ahsap-kesim',
    slug: 'ahsap-kesim',
    name: 'Ahşap Kesim',
    icon: '🪵',
    products: [
      {
        name: 'Bardak Altlığı',
        cost: 15, shipping: 10, etsy_fee: 11.5, sale_price: 48, net_profit: 11.5, margin: 24,
        image: 'https://images.unsplash.com/photo-1511689460791-42fa9abd01d8?w=400&h=200&fit=crop&q=80',
      },
      {
        name: 'Ahşap Tablo',
        cost: 28, shipping: 10, etsy_fee: 19.7, sale_price: 82, net_profit: 24.3, margin: 30,
        image: 'https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?w=400&h=200&fit=crop&q=80',
      },
    ],
  },
  {
    id: 'aliexpress',
    slug: 'aliexpress',
    name: 'Aliexpress Otomasyon',
    icon: '🛒',
    products: [
      {
        name: 'Ürün Listeleme',
        cost: 0, shipping: 0, etsy_fee: 0, sale_price: 0, net_profit: 0, margin: 0,
        note: 'Aliexpress otomasyonunda kâr oranları seçeceğiniz tedarikçiye göre anlık hesaplanır.',
        image: 'https://images.unsplash.com/photo-1613843426349-a3e9bb12c390?w=400&h=200&fit=crop&q=80',
      },
    ],
  },
  {
    id: 'telegram',
    slug: 'telegram',
    name: 'Kendi Ürünlerin (Telegram)',
    icon: '✈️',
    products: [
      {
        name: 'Telegram Entegrasyonu',
        cost: 0, shipping: 0, etsy_fee: 0, sale_price: 0, net_profit: 0, margin: 0,
        note: 'Telegram botu üzerinden gönderdiğiniz ürünler için maliyet analizi otomatik yapılır.',
        image: 'https://images.unsplash.com/photo-1611746872915-64bbc8a49f2e?w=400&h=200&fit=crop&q=80',
      },
    ],
  },
  {
    id: 'epoxy',
    slug: 'epoxy',
    name: 'Epoxy',
    icon: '💎',
    products: [
      {
        name: 'Anahtarlık',
        cost: 10, shipping: 10, etsy_fee: 4.0, sale_price: 16.8, net_profit: -7.2, margin: -43,
        image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=200&fit=crop&q=80',
      },
    ],
  },
]
