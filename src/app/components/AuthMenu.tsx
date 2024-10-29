import { Avatar, Dropdown, MenuProps } from 'antd'
import { Session } from 'next-auth'
import { BookOutlined, UserOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { IoMdLogOut } from 'react-icons/io'
import { logout } from '../(auth)/logout'

const AuthMenu = ({ session }: { session: Session | null }) => {
  return (
    <div>
      {session?.user ? (
        <Dropdown
          trigger={['click']}
          placement="bottomRight"
          menu={{
            items: [
              {
                key: '1',
                icon: <UserOutlined />,
                label: (
                  <Link
                    className="text-xs text-neutral-800"
                    href="/account/profile"
                  >
                    {session.user.name}
                  </Link>
                )
              },
              {
                key: '4',
                icon: <BookOutlined />,
                label: (
                  <Link
                    className="text-xs text-neutral-800"
                    href="/account/bookings"
                  >
                    Bookings
                  </Link>
                )
              },
              {
                key: '2',
                icon: <IoMdLogOut className="text-red-400" />,
                label: (
                  <form action={logout}>
                    <button className="text-red-400" type="submit">
                      Sign out
                    </button>
                  </form>
                )
              }
            ] as MenuProps['items']
          }}
        >
          <Avatar
            style={{ backgroundColor: '#619fb4', cursor: 'pointer' }}
            shape="circle"
          >
            {session?.user?.name?.slice(0, 1)}
          </Avatar>
        </Dropdown>
      ) : (
        <Link
          href="/login"
          className="text-white flex items-center justify-center font-semibold rounded-full bg-blue-600 px-5 py-1.5"
        >
          Sign in
        </Link>
      )}
    </div>
  )
}

export { AuthMenu }
