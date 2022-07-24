import styles from './styles.module.css'

export const ProfileAvatar = ({
  profileAvatarUrl,
  profileName,
  className: customClassName
}) => (
  <img
    src={profileAvatarUrl}
    alt={`Foto de Perfil de ${profileName}`}
    width={50}
    height={50}
    className={`${styles['profile-avatar']} ${customClassName}`}
  />
)
