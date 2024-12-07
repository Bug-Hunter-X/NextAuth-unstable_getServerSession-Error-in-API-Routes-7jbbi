```javascript
import {unstable_getServerSession} from 'next-auth';
import {authOptions} from '@/pages/api/auth/[...nextauth]';

export default async function MyComponent(props) {
  // Directly fetch the session within the component.
  const session = await unstable_getServerSession(props.req, props.res, authOptions);

  if (!session) {
    return <Redirect to='/login' />;
  }

  // ... rest of the component
}
```