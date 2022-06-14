const me = {
  siteName: 'Red Links',
  avatar: '/icons/avatar.jpg',
  description: ' В начале марта получил дополнительное образование по направлению Frontend разработки и на данный момент умею писать сайты с динамической прорисовкой контента, анимацией, использованием API и базы данных'
}

export default function handler(req, res) {
  res.status(200).json(me)
}

