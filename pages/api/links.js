const links = [
  {
    _id: 'link_1',
    icon: {
      path: 'icons/vk.svg',
      width: 76
    },
    isImportant: false,
    gradient: {
      from: '#13E789',
      to: '#00bbd5'
    },
    link: 'https://vk.com/alexey_gorylev',
    title: "я во вконтакте"
  },
  {
    _id: 'link_1',
    icon: {
      path: 'icons/vk.svg',
      width: 76
    },
    isImportant: false,
    gradient: {
      from: '#13E789',
      to: '#00bbd5'
    },
    link: 'https://vk.com/alexey_gorylev',
    title: "я во вконтакте"
  },
  {
    _id: 'link_1',
    icon: {
      path: 'icons/vk.svg',
      width: 76
    },
    isImportant: false,
    gradient: {
      from: '#13E789',
      to: '#00bbd5'
    },
    link: 'https://vk.com/alexey_gorylev',
    title: "я во вконтакте"
  },



]

export default function handler(req, res) {
  res.status(200).json(links)
}

