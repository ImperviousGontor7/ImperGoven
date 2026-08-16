function About() {
  return (
    <section>
      <h1>About Page</h1>

      <details>
        <summary>Siapa saya?</summary>
        <p>
          Saya sedang belajar React SPA menggunakan Outlet dan Router.
        </p>
      </details>

      <details>
        <summary>Skill</summary>
        <section>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>Vite</li>
          </ul>
        </section>
      </details>

      <details>
        <summary>Tujuan belajar</summary>
        <section>
          <p>
            Untuk membuat aplikasi web modern berbasis SPA.
          </p>
        </section>
      </details>
    </section>
  );
}

export default About;