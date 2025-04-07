import { useState } from 'react'
import ContentWrap from './components/client/ContentWrap'
import { GlobalSection, AppSection } from './App.style'

function App() {
  return <GlobalSection>
    <AppSection>
      <ContentWrap/>
    </AppSection>
  </GlobalSection>
}

export default App
