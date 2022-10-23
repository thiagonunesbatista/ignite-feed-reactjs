import { users } from './users'

const postHashtags = [
  [
    {
      name: 'novoprojeto',
      url: '#'
    },
    {
      name: 'nlw',
      url: '#'
    },
    {
      name: 'rocketseat',
      url: '#'
    }
  ],
  [
    {
      name: 'uiux',
      url: '#'
    },
    {
      name: 'userexperience',
      url: '#'
    }
  ]
]

const postComments = [
  {
    content: {
      text: 'Muito bom Thiago, parabéns!! 👏👏'
    },
    author: users[1]
  }
]

export const posts = [
  {
    author: users[0],
    content: {
      text: [
        {
          type: 'paragraph',
          content: 'Fala galeraa 👋'
        },
        {
          type: 'paragraph',
          content:
            'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no curso Ignite da RocketSeat.'
        },
        {
          type: 'link',
          content: '👉 Ignite Feed',
          url: 'https://github.com/thiagonunesbatista/ignite-feed-reactjs'
        }
      ],
      hashtags: postHashtags[0]
    },
    comments: [postComments[0]],
    publishedAt: new Date('2022-07-25 07:00:00')
  }
]
