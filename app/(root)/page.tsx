import React from 'react'
import SearchForm from '../../components/SearchForm'
import StartupCard from '@/components/StartupCard'

const page = async ({ searchParams }: { searchParams: Promise<{ query?: string }> }) => {
  
  const query = (await searchParams).query
  const posts = [{
    _createdAt: new Date(),
    _id: 1,
    views: 10,
    author: {
      _id: 1,
      name: 'Samuael'
    },
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp8BTHOb40mljtNCl2L5nwjF6PpqEnJN786iayiyiW_ZDQyJX6nY7ofhY&s=10',
    description: 'Finaly a cure for cancer by Nano Inc.',
    category: 'Robot',
    title: 'Nano Bots'
  }]

  return (
    <>
      <section className='pink_container'>
        <h1 className='heading'>Pitch your startup, connect with entrepreneurs</h1>
        <p className='sub-heading !max-w-3xl'>Submit Ideas, Vote on Pitches and Get Noticed in Virtual Competitions</p>

        <SearchForm query={ query } />
      </section>

      <section className='section_container'>
        <p className='text-30-semibold'>
          {query ? `Search results for ${query}` : 'All Startups'}
        </p>

        <ul className='mt-7 card_grid'>
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard, index: number) => (
              <StartupCard post={post} key={post?._id} />
            ))
          ) : (
              <p className='no-results'>No startups found.</p>
          )}
        </ul>
      </section>
    </>
  )
}

export default page