import React, { useState } from 'react'
import { Modal, Image } from 'antd'
import ReactPlayer from 'react-player'
import { FaPlayCircle } from 'react-icons/fa'

interface VideoPlayerProps {
  url: string
  name: string
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url, name }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <div>
      <div onClick={() => setIsModalVisible(true)} className="relative">
        <Image
          height={96}
          width={96}
          src="/logo-sm-black-and-white.png"
          alt="Image"
          className="border rounded opacity-60"
          preview={false}
        />

        <FaPlayCircle className="text-primary-500 text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
      <Modal
        title={name}
        open={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        width={800}
        destroyOnClose={true}
      >
        <ReactPlayer
          url={url}
          controls={true}
          playing={true}
          width="100%"
          height="100%"
        />
      </Modal>
    </div>
  )
}

export { VideoPlayer }
