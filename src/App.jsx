import { Fragment } from 'react'

import { Header } from '@/components/Header'
import { Posts } from '@/components/Posts'
import { HomeContainer, PageContainer } from '@/components/Containers'

import { ProfileCard } from '@/components/Profile'

import { currentLoggedUser } from '@/mocks/users'

import './global.css'

export function App() {
  return (
    <Fragment>
      <Header />
      <PageContainer>
        <HomeContainer>
          <ProfileCard user={currentLoggedUser} isLoggedUser />
          <Posts />
        </HomeContainer>
      </PageContainer>
    </Fragment>
  )
}
