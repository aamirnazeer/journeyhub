import { cookies } from 'next/headers';

export default async function SignIn() {
  const cookieStore = cookies();
  const token = cookieStore.get('next-auth.csrf-token');
  const csrfToken = token?.value.split('|')[0];

  return (
    <form method="post" action="/api/auth/callback/credentials">
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <label>
        Username
        <input name="username" type="text" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button type="submit">Signin</button>
    </form>
  );
}
