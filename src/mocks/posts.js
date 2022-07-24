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
      text: 'Muito bom Devon, parabéns!! 👏👏'
    },
    author: users[1]
  }
]

export const posts = [
  {
    author: users[0],
    content: {
      text: `
      Fala galeraa 👋
      
      Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
      
      👉 jane.design/doctorcare
      `,
      hashtags: postHashtags[0]
    },
    comments: [postComments[0]],
    publishedAt: 'Publicado há 1h'
  }
]
