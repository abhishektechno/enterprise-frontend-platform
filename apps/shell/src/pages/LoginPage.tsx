export function LoginPage() {
  return (
    <section>
      <h1>Sign in</h1>

      <p>Sign in to access the Enterprise Operations Platform.</p>

      <form>
        <div>
          <label htmlFor="email">Email</label>

          <input id="email" name="email" type="email" autoComplete="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>

          <input id="password" name="password" type="password" autoComplete="current-password" />
        </div>

        <button type="submit">Sign in</button>
      </form>
    </section>
  );
}
