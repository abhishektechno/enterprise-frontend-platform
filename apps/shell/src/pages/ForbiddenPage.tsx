import { Link } from 'react-router';

export function ForbiddenPage() {
  return (
    <section>
      <h1>Access denied</h1>

      <p>You do not have permission to access this area.</p>

      <Link to="/">Return to dashboard</Link>
    </section>
  );
}
