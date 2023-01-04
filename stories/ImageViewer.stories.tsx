import { HStack, Stack } from '@chakra-ui/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import ImageViewer from 'components/ImageViewer'

export default {
    title: 'Example/ImageViewer',
    component: ImageViewer,
    argTypes: {},
} as ComponentMeta<typeof ImageViewer>

const Template: ComponentStory<typeof ImageViewer> = (args) => (
    <Stack width='100%'>
        <HStack width='100%' maxWidth='4xl'>
            <Stack width='100%'>
                <ImageViewer {...args} />
            </Stack>
            <Stack width='100%'></Stack>
        </HStack>
    </Stack>
)

export const First = Template.bind({})
First.args = {
    images: ['/cow.jpeg', '/pig.jpeg', '/sheep.jpeg'],
}
