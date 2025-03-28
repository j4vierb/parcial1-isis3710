import { Header } from "../components/Header/Header";

const MainLayout = ({ children }) => {
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <Header />

      <main>
        { children }
      </main>

      <footer className="d-flex justify-content-center align-items-center" style={{ position: 'absolute', bottom: '0', width: '100%' }}>
        <p className="text-center" style={{fontWeight: 600, fontSize: '18px'}}>Contact us: +57 3102105253 - info@elaromamagico.com - @elaromamagico</p>
      </footer>
    </div>
  )
}

export { MainLayout };