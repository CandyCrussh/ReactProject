
import './App.css'

import Display from './Components/Display'
import styles from './App.module.css'
import ButtonContainer from './Components/ButtonsContainer'

function App() {
  return (
    <div className={styles.calculator} >
      <Display></Display>
      <ButtonContainer></ButtonContainer>
      </div>
  )
}

export default App
