/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useState } from 'react'
import { Upload, Button, message, UploadFile, UploadProps, Image } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import axios from 'axios'
import { IoMdClose } from 'react-icons/io'
import { VideoPlayer } from './VideoPlayer'
import { FileIcon } from './FileIcon'
import { shortenFileName } from '@/app/utils/shortenFileName'
import { getFileExtension } from '@/app/utils/getFileExtension'

const { Dragger } = Upload

interface FileUploaderProps {
  onUploadComplete?: (assets: UploadFile[]) => void
}

const FileUploader: React.FC<FileUploaderProps> = ({ onUploadComplete }) => {
  const [loading, setLoading] = useState(false)
  const [fileList, setFileList] = useState<UploadFile[]>([])
  const [assets, setAssets] = useState<UploadFile[]>([])

  const getSignature = async () => {
    try {
      const response = await axios.post('/api/media/cloudinary-sign')
      return response.data
    } catch (error) {
      console.error('Error getting signature:', error)
      return null
    }
  }

  const handleUpload = async (file: any) => {
    const signatureData = await getSignature()
    if (!signatureData) return

    const formData = new FormData()
    formData.append('file', file)
    formData.append(
      'upload_preset',
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
    )
    formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY!)
    formData.append('timestamp', signatureData.timestamp)
    formData.append('signature', signatureData.signature)

    setLoading(true)
    const URL = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/auto/upload`

    try {
      const response = await axios.post(URL, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })

      message.success('Upload successful!')
      const uniqueUid = `${file.uid}-${new Date().getTime()}`

      const newAsset: UploadFile = {
        uid: uniqueUid,
        name: file.name,
        status: 'done',
        url: response.data.secure_url,
        type: file.type
      }

      const updatedAssets = [...assets, newAsset]
      setAssets(updatedAssets)
      setFileList(updatedAssets)

      if (onUploadComplete) {
        onUploadComplete(updatedAssets)
      }
    } catch (error) {
      message.error('Upload failed.')
      console.error('Upload error:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleChange: UploadProps['onChange'] = ({ fileList }) => {
    setFileList(fileList)
  }

  const handleRemove = (uid: string) => {
    const updatedAssets = assets.filter((file) => file.uid !== uid)
    setAssets(updatedAssets)
    setFileList(updatedAssets)

    if (onUploadComplete) {
      onUploadComplete(updatedAssets)
    }
  }

  return (
    <div>
      <Dragger
        customRequest={({ file, onSuccess, onError }: any) => {
          handleUpload(file)
            .then(() => onSuccess?.('done'))
            .catch(() => onError?.('error'))
        }}
        showUploadList={false}
        fileList={fileList}
        onChange={handleChange}
        accept=".pdf,video/*,image/*,.fig,.md,.xlsx,.xls,.doc,.docx"
      >
        <p className="ant-upload-drag-icon">
          <UploadOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <Button loading={loading} icon={<UploadOutlined />}>
          {loading ? 'Uploading...' : 'Upload'}
        </Button>
      </Dragger>
      <div className="flex items-center flex-wra mt-6">
        {assets.map((node) => {
          if (!node.url) return null
          return (
            <div key={node.uid} className="relative">
              {node.type?.includes('image') ? (
                <Image
                  height={96}
                  width={96}
                  key={node.uid}
                  src={node.url as string}
                  alt="Image"
                  className="border rounded"
                />
              ) : node.type?.includes('video') ? (
                <VideoPlayer name={node.name} url={node.url} />
              ) : (
                <a href={node.url} download={node.name}>
                  <div className="border h-24 w-24 flex items-center justify-center">
                    <FileIcon fileType={getFileExtension(node.url)} />
                  </div>
                </a>
              )}
              <div className="overflow-x-hidden" title={node.name}>
                <div className="text-xs px-1 text-primary-500 leading-tight">
                  {shortenFileName(node.name)}
                </div>
              </div>

              <button
                type="button"
                className="z-50 absolute -top-3 -right-3 bg-neutral-100 drop-shadow-sm h-4 w-4 flex justify-center items-center rounded-full"
                onClick={() => handleRemove(node.uid)}
              >
                <IoMdClose className="text-red-400" />
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export { FileUploader }
