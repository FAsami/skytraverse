'use client'
import { Layout, Menu } from 'antd'
import Link from 'next/link'
import { FaBook, FaSignOutAlt } from 'react-icons/fa'
import { BiLock, BiSupport, BiUser } from 'react-icons/bi'

const { Sider } = Layout

const ProfileSidebar = () => {
  return (
    <Sider
      className="relative !h-[calc(100vh-var(--header-height)-1rem)] !rounded-r-md overflow-hidden mt-2 flex flex-col justify-between"
      width={250}
      theme="light"
    >
      <div>
        <Menu mode="inline" defaultSelectedKeys={['profile']}>
          <Menu.Item key="profile" icon={<BiUser />}>
            <Link href="/account/profile">Profile</Link>
          </Menu.Item>
          <Menu.Item key="password" icon={<BiLock />}>
            <Link href="/account/password">Password</Link>
          </Menu.Item>
          <Menu.Item key="booking" icon={<FaBook />}>
            <Link href="/account/bookings">Booking</Link>
          </Menu.Item>
          <Menu.Item key="support" icon={<BiSupport />}>
            <Link href="/account/support">Support</Link>
          </Menu.Item>
        </Menu>
      </div>
      <div className="p-4 border-t border-gray-200 mt-auto absolute bottom-0 left-0 right-0">
        <div className="flex font-semibold text-red-500 items-center justify-center cursor-pointer">
          <FaSignOutAlt />
          Logout
        </div>
      </div>
    </Sider>
  )
}

export { ProfileSidebar }