import React from 'react'
import styled from 'styled-components'

import Icon from '@mdi/react'
import { mdiLinkVariant } from '@mdi/js'

import Card from './Card'

export default (props) => (
  <Card id={props.id}>
    <VideoTitle id={props.id}>{props.title}</VideoTitle>
    <VideoContainer>
      <VideoIframe width='100%' height='100%' src={props.src} frameBorder='0' allow='autoplay; fullscreen' allowFullScreen />
    </VideoContainer>
  </Card>
)

const VideoTitle = (props) => {
  const titleId = `title-${props.id}`

  return (
    <VideoTitleText id={titleId}>
      {props.id} - {props.children}
      <VideoTitleLink href={`#${props.id}`} aria-labelledby={titleId}>
        <Icon path={mdiLinkVariant} size={0.7} color='#005260' />
      </VideoTitleLink>
    </VideoTitleText>
  )
}

const VideoTitleText = styled.h2`
  display: inline-block;
  color: ${props => props.theme.card.textColor};

  font-size: 1.17em;
  font-weight: bold;
`

const VideoTitleLink = styled.a`
  visibility: hidden;

  transition: 0.1s;
  -webkit-transition: 0.1s;

  ${VideoTitleText}:hover & {
    visibility: visible;
    margin-left: 10px;
  }
`

const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
`

const VideoIframe = styled.iframe.attrs(props => ({
  ...props
}))`
  border:none;
  position: absolute;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  height: 100%;
  max-width: 100%;

  overflow: hidden;
`
