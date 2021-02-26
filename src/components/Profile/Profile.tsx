import { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengesContext'
import styles from './Profile.module.css'

export function Profile() {

  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/55894232?s=400&u=988d76189e00f291454c792d105a7147b0b23ee7&v=4" alt="Victor Kengoo" />
      <div>
        <strong>Victor Kengoo</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  )
}