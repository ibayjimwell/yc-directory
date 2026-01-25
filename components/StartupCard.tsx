import { formatDate } from '@/utils/utils'
import { EyeIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

function StartupCard({ post }: { post: StartupTypeCard }) {
  return (
    <li className='startup-card group'>
        <div className='flex-between'>
            <p className='startup-card-date'>
                {formatDate(post._createdAt)}
            </p> 
            <div className='flex gap-1.5'>
                <EyeIcon className='size-6 text-primary'></EyeIcon>
                <span className='text-16-medium'>{post.views}</span>
            </div>  
        </div>

        <div className='flex-between mt-5 gap-5'>
            <div className='flex-1'>
                <Link href={`/users/${post.author?._id}`}>
                    <p className='text-16-medium line-clamp-1'>{post.author.name}</p>
                </Link>
                <Link href={`/startup/${post._id}`}>
                    <h3 className='text-26-semibold line-clamp-1'>{post.title}</h3>
                </Link>
            </div>
            <Link href={`/user/${post.author?._id}`}>
                <Image 
                    src='https://placehold.co/48x48' 
                    alt="placeholder" 
                    width={48} 
                    height={48}
                    className='rounded-full'
                ></Image>
            </Link>
        </div>

        <Link href={`/startup/${post._id}`}>
            <p className='startup-card_desc'>
                {post.description}
            </p>

            <img
                src={post.image}
                alt="placeholder"
                className='startup-card_img'
            ></img>
        </Link>

        <div className='flex-between gap-3 mt-5'>
            <Link href={`/?query=${post.category.toLowerCase()}`}>
                  <p className='text-16-medium bg-gray-200 py-2 px-4 rounded-full'>{post.category}</p>
            </Link>
            <Link href={`/startup/${post._id}`}>
                <button className='startup-card_btn cursor-pointer bg-black text-white py-2 px-4 rounded-full'>Details</button>
            </Link>
        </div>
    </li>
  )
}

export default StartupCard