import styles from './styles.module.css'

import IconPencil from '@/assets/icons/items/pencil.svg'

export const EditProfile = () => (
  <div className={styles['edit-profile']}>
    <a className={styles['edit-profile__action']} href='#'>
      <img src={IconPencil} />
      Editar perfil
    </a>
  </div>
)
