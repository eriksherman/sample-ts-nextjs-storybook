import { Stack } from '@chakra-ui/react'
import Image from 'next/image'

interface Props {
    images: string[]
}

/**
 * renders the image on the left side of the screen
 * on hover, the image will display, zoomed in, on the right side of the screen.
 */
export default function ImageViewer({ images }: Props) {
    return (
        <Stack width='100%' paddingBottom='100%' border='1px solid black' position='relative'>
            <Image src={images[0]} alt='' layout='fill' objectFit='cover' />
        </Stack>
    )
}
