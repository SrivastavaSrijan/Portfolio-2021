import { Flex, Stack, Text } from '@chakra-ui/layout';

export const RoundedTextIcon = ({ text = '', icon, iconBg, ...rest }) => {
  return (
    <Stack direction={'row'} align={'center'} {...rest}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600} color="textPrimary">
        {text}
      </Text>
    </Stack>
  );
};
