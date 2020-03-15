import React from 'react'

import VideoCard from './VideoCard'

const links = [
  { id: '1', src: 'https://player.vimeo.com/video/397601472', title: 'Innføring i Teams' },
  { id: '2', src: 'https://player.vimeo.com/video/397601484', title: 'Delta i et videomøte' },
  { id: '3', src: 'https://player.vimeo.com/video/397757933', title: 'Start et videomøte' },
  { id: '4', src: 'https://player.vimeo.com/video/397601457', title: 'Dele innhold i et videomøte' }
]

export default () => (
  <>
    {links.map(({ id, src, title }) => (
      <VideoCard key={id} id={id} src={src} title={title} />
    ))}
  </>
)
