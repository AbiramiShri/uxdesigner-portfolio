import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './shared/header/Navbar'
import { Homepage } from './homepage/Homepage'
import { Presentation } from './pages/presentation/Presentation'
import { Graphic } from './pages/graphic/Graphic'
import { Uiux } from './pages/uiux/Uiux'
import { CaseStudy } from './pages/uiux/CaseStudy'

function HomePageLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Homepage />
      </main>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageLayout />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/graphic" element={<Graphic />} />
        <Route path="/uiux" element={<Uiux />} />
        <Route path="/uiux/:slug" element={<CaseStudy />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
