import { TextArea, Submit } from '@/components/Forms'

import styles from './styles.module.css'

import { useState } from 'react'

export const FeedbackForm = () => {
  const [feedbackText, setFeedbackText] = useState('')

  return (
    <div className={styles['feedback-form']}>
      <p className={styles['feedback-form__title']}>Deixe seu feedback</p>

      <TextArea
        value={feedbackText}
        setValue={setFeedbackText}
        placeholder='Deixe um comentário'
      />
      {feedbackText.length > 0 && <Submit text='Publicar' />}
    </div>
  )
}
