```javascript
import {unstable_getServerSession} from 'next-auth';
import {authOptions} from '@/pages/api/auth/[...nextauth]';

const getSession = async (context) => {
  return unstable_getServerSession(context.req, context.res, authOptions);
};

export default async function MyComponent(props) {
  const session = await getSession({req: props.req, res: props.res});

  if (!session) {
    return <Redirect to='/login' />;
  }

  // ... rest of the component
}
```