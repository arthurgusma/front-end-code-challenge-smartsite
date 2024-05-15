import { Flex, Radio, Text, Spacer} from '@chakra-ui/react'

interface RadioFormProps {
    value: string,
    textLeft?: string,
    textRight?: string,
}

export default function RadioForm({ value, textLeft, textRight}: RadioFormProps) {
    return (
        <Flex >
            <Radio value={value} className='mr-2' name='radio-option'/>
            {textLeft && <Text fontSize='sm'>{textLeft}</Text>}
            <Spacer />
            {textRight && <Text fontSize='sm'>{textRight}</Text>}
        </Flex>
    );
}