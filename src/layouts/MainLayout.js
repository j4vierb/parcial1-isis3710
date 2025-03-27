const MainLayout = ({ children }) => {
  return (
    <>
      <header style={{minHeight: '10vh'}}>
        <h1>El aroma mágico</h1>
      </header>

      <main style={{minHeight: '80vh'}}>
        { children }
      </main>

      <footer className="d-flex justify-content-center align-items-center" style={{minHeight: '10vh'}}>
        <p className="text-center">Contact us: +57 3102105253 - info@elaromamagico.com - @elaromamagico</p>
      </footer>
    </>
  )
}

export { MainLayout };