import { getTranslations } from 'next-intl/server';
import { db } from '../../../../db/drizzle';
import { users } from '../../../../db/schema/users';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'Users' });

  return {
    title: t('title'),
  };
}

/**
 * Users page of the app. Used for template purposes.
 */
export default async function UsersPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'Users' });
  const usersArr = await db.select().from(users);

  return (
    <>
      <h1>{t('title')}</h1>
      <div className="flex h-full grow items-center justify-center">
        <ul>
          {usersArr.map((user) => (
            <li key={user.id}>
              name: {user.name}, role: {user.role}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
