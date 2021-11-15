import { TagLeftIcon, Tag, TagLabel, Link, As } from '@chakra-ui/react'
import { FaReact, FaJs, FaSass, FaCode, FaGithub, FaJava } from 'react-icons/fa'
import { IconType } from 'react-icons/lib'
import { SiNextdotjs } from 'react-icons/si'

import useMediaQuery from '../hook/useMediaQuery'
export default function CodeTags({ tags }) {
  const getTag = (tag) => {
    switch (tag) {
      case 'React':
        return ['blue', FaReact]
      case 'Javascript':
        return ['yellow', FaJs]
      case 'Sass':
        return ['pink', FaSass]
      case 'Next.js':
        return ['grey', SiNextdotjs]
      case 'React':
        return ['blue', FaReact]
      case 'React':
        return ['blue', FaReact]
      case 'React':
        return ['blue', FaReact]
      case 'React':
        return ['blue', FaReact]
      case 'Java':
        return ['red', FaJava]
      default:
        return ['grey', FaCode]
    }
  }

  const isLargerThan800 = useMediaQuery(800)

  return (tags ?? [])?.map((item) => (
    <Tag
      key={item}
      colorScheme={getTag(item)[0] as string}
      size={isLargerThan800 ? 'md' : 'sm'}
    >
      <TagLeftIcon as={getTag(item)[1] as As<IconType>}></TagLeftIcon>
      <TagLabel>{item}</TagLabel>
    </Tag>
  ))
}
