import React from 'react'

export default function PostDetailsPage({ params }: { params: { slug: string } }) {
  return (
    <div>Detalhes do post {params.slug} </div>
  )
}
