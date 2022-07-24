import styles from './styles.module.css'

import IgniteLogo from '@/assets/icons/brands/ignite-logo.svg'

export const Header = () => (
  <header className={styles.header}>
    <img src={IgniteLogo} />
    <p className={styles.header__title}>Ignite Feed</p>
  </header>
)
