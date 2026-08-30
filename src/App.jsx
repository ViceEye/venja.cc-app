const email = 'viceeye@163.com'
const github = 'https://github.com/ViceEye'

function ActionLink({ children, href, primary = false }) {
  const external = href.startsWith('http')

  return (
    <a
      className={`action-link ${primary ? 'action-link-primary' : ''}`}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
    >
      {children}
      <span aria-hidden="true" className="action-arrow">-&gt;</span>
    </a>
  )
}

export default function App() {
  return (
    <div className="page-shell">
      <header className="site-header reveal reveal-delay-1">
        <span className="wordmark">KAZI</span>
        <span className="availability"><i aria-hidden="true" />Open to work / collaboration</span>
      </header>

      <main className="hero reveal reveal-delay-2">
        <p className="eyebrow">Reliable under complexity</p>
        <h1>KAZI<span aria-hidden="true">/</span></h1>
        <p className="role">Software Engineer</p>
        <p className="statement">I turn ambiguous ideas into working products.</p>
        <div className="actions">
          <ActionLink href={`mailto:${email}`} primary>Email KAZI</ActionLink>
          <ActionLink href={github}>GitHub</ActionLink>
        </div>
      </main>

      <footer className="site-footer reveal reveal-delay-3">
        <span>London, UK</span>
        <a href={`mailto:${email}`}>{email}</a>
      </footer>
    </div>
  )
}
