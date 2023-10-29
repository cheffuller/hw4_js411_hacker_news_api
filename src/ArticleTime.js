import React from 'react'
import ReactTimeAgo from 'react-time-ago'

export default function ArticleTime(props) {
  const date = new Date(props.date)
  return (
    <span>
      <ReactTimeAgo date={date} locale="en-US"/>
    </span>
  )
}
