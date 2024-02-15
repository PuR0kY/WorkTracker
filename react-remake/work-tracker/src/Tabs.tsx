export default function Tabs() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Work Tracker
      </a>
      <ul>
        <li>
          <a href="/Autorizace">Autorizace</a>
        </li>

        <li>
          <a href="/SPEC">SPEC</a>
        </li>

        <li>
          <a href="/Reklamace">Reklamace</a>
        </li>

        <li>
          <a href="/Platby">Platby</a>
        </li>
      </ul>
    </nav>
  );
}